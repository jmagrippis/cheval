/* @flow */

import { SET_SKILLS, SET_SKILL_VALUE } from '../constants/actionTypes'
import type { SET_SKILLS_ACTION, SET_SKILL_VALUE_ACTION, Skill } from '../types'

export const setSkills = (skills: Array<Skill>): SET_SKILLS_ACTION => ({
  skills,
  type: SET_SKILLS
})

export const setSkillValue = (id: string, value: number): SET_SKILL_VALUE_ACTION => ({
  id,
  value,
  type: SET_SKILL_VALUE
})
