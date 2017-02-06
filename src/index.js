/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'reset-css'

import './index.css'
import App from './components/App'
import { auth } from './firebase'
import { onAuthChange } from './observers'
import store from './store'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

auth.onAuthStateChanged(onAuthChange)
