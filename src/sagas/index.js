/* @flow */

import createSagaMiddleware from 'redux-saga'

import skillsSaga from './skills'

export const sagaMiddleware = createSagaMiddleware()

export default function* rootSaga (): Generator<*, void, *> {
  yield [
    skillsSaga()
  ]
}
