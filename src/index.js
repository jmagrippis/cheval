/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'reset-css'

import './index.css'
import { setUser } from './actions/user'
import App from './components/App'
import firebase from './firebase'
import store from './store'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user)
    store.dispatch(setUser({
      id: user.uid,
      avatar: user.photoURL,
      email: user.email,
      name: user.displayName
    }))
  } else {
    store.dispatch(setUser(null))
  }
})
