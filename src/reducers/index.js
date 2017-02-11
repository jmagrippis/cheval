/* @flow */

import { combineReducers } from 'redux'

import companyValues from './companyValues'
import fetching from './fetching'
import skills from './skills'
import user from './user'
import type { AppState, IdToValueMap } from '../types'

const cheval = combineReducers({
  companyValues,
  fetching,
  skills,
  user
})

export const getIdValuesMap = (arr: Array<{ id: string, value: number, [key: string]: * }>): IdToValueMap => arr.reduce((accumulator, { id, value }) => {
  accumulator[id] = value
  return accumulator
}, {})

export const getCompanyValuesIdValuesMap = (state: AppState): IdToValueMap => getIdValuesMap(state.companyValues)

export const getSkillIdValuesMap = (state: AppState): IdToValueMap => getIdValuesMap(state.skills)

export const getUserId = (state: AppState) => state.user && state.user.id

export default cheval
