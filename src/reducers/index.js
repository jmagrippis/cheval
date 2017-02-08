/* @flow */

import { combineReducers } from 'redux'

import fetching from './fetching'
import skills from './skills'
import user from './user'
import type { AppState } from '../types'

const cheval = combineReducers({
  fetching,
  skills,
  user
})

export const getSkillIdValuesMap = (state: AppState) => state.skills.reduce((accumulator, { id, value }) => {
  accumulator[id] = value
  return accumulator
}, {})

export default cheval
