/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'reset-css'

import App from './components/App'
import './index.css'

injectTapEventPlugin()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
