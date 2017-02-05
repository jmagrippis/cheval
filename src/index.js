/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'reset-css'

import './index.css'
import { setUser } from './actions/user'
import App from './components/App'
import { auth, db } from './firebase'
import store from './store'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

auth.onAuthStateChanged((authUser) => {
  if (authUser) {
    const id = authUser.uid
    db.ref(`/users/${id}`).once('value').then((snapshot) => {
      const dbUser = snapshot.val()
      const user = {
        id,
        avatar: dbUser ? dbUser.avatar : authUser.photoURL,
        email: dbUser ? dbUser.email : authUser.email,
        name: dbUser ? dbUser.name : authUser.displayName,
        role: dbUser ? dbUser.role : 'Prawn'
      }
      store.dispatch(setUser(user))
      if (!dbUser) {
        db.ref(`/users/${id}`).set(user)
      }
    })
  } else {
    store.dispatch(setUser(null))
  }
})
