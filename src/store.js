/* @flow */

import { createStore, applyMiddleware } from 'redux'

import cheval from './reducers'
import createLogger from 'redux-logger'

const configureStore = () => {
  const store = createStore(
    cheval,
    applyMiddleware(createLogger({
      collapsed: true,
      predicate: () => process.env.NODE_ENV === 'development'
    }))
  )

  return store
}

export default configureStore()
