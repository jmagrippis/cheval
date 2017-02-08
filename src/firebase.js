/* @flow */

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyCxPmbz85XT8_uzVg4bplzTQKP5jsuomXc',
  authDomain: 'cheval-stg.firebaseapp.com',
  databaseURL: 'https://cheval-stg.firebaseio.com',
  storageBucket: 'cheval-stg.appspot.com',
  messagingSenderId: '1042725072618'
})

export const auth = firebase.auth()
export const db = firebase.database()

export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const writeUserSkills = (userId: string, skills: Array<{ [key: string]: number }>): Promise<*> =>
  db.ref(`users/${userId}/skills`).set(skills)

export default firebase
