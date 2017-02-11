/* @flow */

import createSagaMiddleware from 'redux-saga'

import companyValuesSaga from './companyValues'
import skillsSaga from './skills'

export const sagaMiddleware = createSagaMiddleware()

export default function* rootSaga (): Generator<*, void, *> {
  yield [
    companyValuesSaga(),
    skillsSaga()
  ]
}
