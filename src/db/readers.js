/* @flow */

import reduce from 'lodash/reduce'

import { setIdeals } from '../actions/ideals'
import { setSkills } from '../actions/skills'
import { setUser } from '../actions/user'
import { db } from '../firebase'
import store from '../store'
import type { FirebaseUser } from '../types'

export const onSkillsRead = (prevSkills: { [key:string]: number }, snapshot: Object) => {
  const skills = snapshot.val()
  store.dispatch(setSkills(reduce(skills, (accumulator, name, id) => {
    accumulator.push(Object.assign({}, {
      id,
      name,
      value: typeof prevSkills[id] !== 'undefined' ? prevSkills[id] : 0.5
    }))
    return accumulator
  }, [])))
}

export const onIdealsRead = (prevIdeals: { [key:string]: number }, snapshot: Object) => {
  const ideals = snapshot.val()
  store.dispatch(setIdeals(reduce(ideals, (accumulator, name, id) => {
    accumulator.push(Object.assign({}, {
      id,
      name,
      value: typeof prevIdeals[id] !== 'undefined' ? prevIdeals[id] : 0.5
    }))
    return accumulator
  }, [])))
}

export const onUserRead = (firebaseUser: FirebaseUser, snapshot: Object) => {
  const id = firebaseUser.uid
  const dbUser = snapshot.val()
  const user = {
    id,
    avatar: dbUser ? dbUser.avatar : firebaseUser.photoURL,
    company: dbUser ? dbUser.company : null,
    email: dbUser ? dbUser.email : firebaseUser.email,
    ideals: dbUser && dbUser.ideals ? dbUser.ideals : {},
    name: dbUser ? dbUser.name : firebaseUser.displayName,
    role: dbUser ? dbUser.role : 'prawn',
    skills: dbUser && dbUser.skills ? dbUser.skills : {}
  }
  store.dispatch(setUser(user))
  if (!dbUser) {
    db.ref(`/users/${id}`).set(user)
  }

  db.ref(`/roles/${user.role}/skills`).once('value').then(onSkillsRead.bind(undefined, user.skills))

  if (!user.company) return

  db.ref(`/companies/${user.company}/ideals`).once('value').then(onIdealsRead.bind(undefined, user.ideals))
}
