/* @flow */

import reduce from 'lodash/reduce'

import { setIdeals } from './actions/ideals'
import { setSkills } from './actions/skills'
import { setUser } from './actions/user'
import { db } from './firebase'
import store from './store'
import type { FirebaseUser } from './types'

export const onAuthChange = (authUser: FirebaseUser) => {
  if (authUser) {
    const id = authUser.uid
    db.ref(`/users/${id}`).once('value').then((snapshot) => {
      const dbUser = snapshot.val()
      const user = {
        id,
        avatar: dbUser ? dbUser.avatar : authUser.photoURL,
        company: dbUser ? dbUser.company : null,
        email: dbUser ? dbUser.email : authUser.email,
        ideals: dbUser && dbUser.ideals ? dbUser.ideals : {},
        name: dbUser ? dbUser.name : authUser.displayName,
        role: dbUser ? dbUser.role : 'prawn',
        skills: dbUser && dbUser.skills ? dbUser.skills : {}
      }
      store.dispatch(setUser(user))
      if (!dbUser) {
        db.ref(`/users/${id}`).set(user)
      }

      db.ref(`/roles/${user.role}/skills`).once('value').then((snapshot) => {
        const skills = snapshot.val()
        store.dispatch(setSkills(reduce(skills, (accumulator, name, id) => {
          accumulator.push(Object.assign({}, {
            id,
            name,
            value: user.skills[id] ? user.skills[id] : 0.5
          }))
          return accumulator
        }, [])))
      })

      if (!user.company) return

      db.ref(`/companies/${user.company}/ideals`).once('value').then((snapshot) => {
        const ideals = snapshot.val()
        store.dispatch(setIdeals(reduce(ideals, (accumulator, name, id) => {
          accumulator.push(Object.assign({}, {
            id,
            name,
            value: user.ideals[id] ? user.ideals[id] : 0.5
          }))
          return accumulator
        }, [])))
      })
    })
  } else {
    store.dispatch(setUser(null))
  }
}
