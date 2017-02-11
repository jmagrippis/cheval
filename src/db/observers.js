/* @flow */

import { onUserRead } from './readers'
import { setUser } from '../actions/user'
import { db } from '../firebase'
import store from '../store'
import type { FirebaseUser } from '../types'

export const onAuthChange = (firebaseUser: FirebaseUser) => {
  if (firebaseUser) {
    db.ref(`/users/${firebaseUser.uid}`).once('value').then(onUserRead.bind(this, firebaseUser))
  } else {
    store.dispatch(setUser(null))
  }
}
