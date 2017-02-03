/* @flow */

import { SET_SKILL_VALUE } from '../constants/actionTypes'

export const setSkillValue = (id: string, value: number) => ({
  id,
  value,
  type: SET_SKILL_VALUE
})
