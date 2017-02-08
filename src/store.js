/* @flow */

import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import cheval from './reducers'
import rootSaga, { sagaMiddleware } from './sagas'

const configureStore = () => {
  const store = createStore(
    cheval,
    applyMiddleware(sagaMiddleware, createLogger({
      collapsed: true,
      predicate: () => process.env.NODE_ENV === 'development'
    }))
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore()
