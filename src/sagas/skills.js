/* @flow */

import { select, throttle } from 'redux-saga/effects'

import { getSkillIdValuesMap } from '../reducers'
import { SET_SKILL_VALUE } from '../constants/actionTypes'
import type { Action } from '../types'

export function* persistSkillValues (action: Action): Generator<*, void, *> {
  yield select(getSkillIdValuesMap)
}

export default function* watchSetValue (): Generator<*, void, *> {
  yield throttle(5000, SET_SKILL_VALUE, persistSkillValues)
}
