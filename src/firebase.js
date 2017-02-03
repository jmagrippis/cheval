import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCxPmbz85XT8_uzVg4bplzTQKP5jsuomXc',
  authDomain: 'cheval-stg.firebaseapp.com',
  databaseURL: 'https://cheval-stg.firebaseio.com',
  storageBucket: 'cheval-stg.appspot.com',
  messagingSenderId: '1042725072618'
})

export default firebaseApp
