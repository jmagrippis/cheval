/* @flow */

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import type { IdToValueMap } from './types'

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

export const writeUserProperty = (userId: string, property: string, value: *): Promise<*> =>
  db.ref(`users/${userId}/${property}`).set(value)

export const writeUserCompanyValues = (userId: string, companyValues: IdToValueMap): Promise<*> =>
  writeUserProperty(userId, 'companyValues', companyValues)

export const writeUserSkills = (userId: string, skills: IdToValueMap): Promise<*> =>
  writeUserProperty(userId, 'skills', skills)

export default firebase
