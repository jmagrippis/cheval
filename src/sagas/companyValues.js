/* @flow */

import { call, select, throttle } from 'redux-saga/effects'

import { getCompanyValuesIdValuesMap, getUserId } from '../reducers'
import { SET_COMPANY_VALUE_VALUE } from '../constants/actionTypes'
import { writeUserCompanyValues } from '../firebase'
import type { Action } from '../types'

export function* persistCompanyValues (action: Action): Generator<*, void, *> {
  const [id, companyValues] = yield [
    select(getUserId),
    select(getCompanyValuesIdValuesMap)
  ]
  if (!id) return
  yield call(writeUserCompanyValues, id, companyValues)
}

export default function* watchSetValue (): Generator<*, void, *> {
  yield throttle(5000, SET_COMPANY_VALUE_VALUE, persistCompanyValues)
}
