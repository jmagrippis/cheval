/* @flow */

import createSagaMiddleware from 'redux-saga'

import idealsSaga from './ideals'
import skillsSaga from './skills'

export const sagaMiddleware = createSagaMiddleware()

export default function* rootSaga (): Generator<*, void, *> {
  yield [
    idealsSaga(),
    skillsSaga()
  ]
}
