/* @flow */

import reduce from 'lodash/reduce'

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
        email: dbUser ? dbUser.email : authUser.email,
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
    })
  } else {
    store.dispatch(setUser(null))
  }
}
