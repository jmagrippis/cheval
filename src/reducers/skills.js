/* @flow */

import { SET_SKILLS, SET_SKILL_VALUE } from '../constants/actionTypes'
import type { SKILLS_ACTION, SkillsState } from '../types'

export const defaultState = []

const skills = (state: SkillsState = defaultState, action: SKILLS_ACTION): SkillsState => {
  switch (action.type) {
    case SET_SKILLS:
      return action.skills
    case SET_SKILL_VALUE:
      let exists = false
      const nextState = state.map((skill) => {
        if (skill.id !== action.id) return skill
        exists = true
        return Object.assign({}, skill, { value: action.value })
      })
      return exists
        ? nextState
        : state
    default:
      return state
  }
}

export default skills
