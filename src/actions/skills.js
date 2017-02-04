/* @flow */

import { SET_SKILL_VALUE } from '../constants/actionTypes'
import type { SET_SKILL_VALUE_ACTION } from '../types'

export const setSkillValue = (id: string, value: number): SET_SKILL_VALUE_ACTION => ({
  id,
  value,
  type: SET_SKILL_VALUE
})
