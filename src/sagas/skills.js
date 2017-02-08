/* @flow */

import { call, select, throttle } from 'redux-saga/effects'

import { getSkillIdValuesMap, getUserId } from '../reducers'
import { SET_SKILL_VALUE } from '../constants/actionTypes'
import { writeUserSkills } from '../firebase'
import type { Action } from '../types'

export function* persistSkillValues (action: Action): Generator<*, void, *> {
  const [id, skills] = yield [
    select(getUserId),
    select(getSkillIdValuesMap)
  ]
  if (!id) return
  yield call(writeUserSkills, id, skills)
}

export default function* watchSetValue (): Generator<*, void, *> {
  yield throttle(5000, SET_SKILL_VALUE, persistSkillValues)
}
