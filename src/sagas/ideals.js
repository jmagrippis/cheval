/* @flow */

import { call, select, throttle } from 'redux-saga/effects'

import { getIdealsIdValuesMap, getUserId } from '../reducers'
import { SET_IDEAL_VALUE } from '../constants/actionTypes'
import { writeUserIdeals } from '../firebase'
import type { Action } from '../types'

export function* persistIdeals (action: Action): Generator<*, void, *> {
  const [id, companyValues] = yield [
    select(getUserId),
    select(getIdealsIdValuesMap)
  ]
  if (!id) return
  yield call(writeUserIdeals, id, companyValues)
}

export default function* watchSetValue (): Generator<*, void, *> {
  yield throttle(5000, SET_IDEAL_VALUE, persistIdeals)
}
