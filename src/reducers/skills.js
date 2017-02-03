/* @flow */

import { SET_SKILL_VALUE } from '../constants/actionTypes'
import type { Action, SkillsState } from '../types'

export const defaultState = [
  {
    id: 'someSkill',
    name: 'Problem-Solving',
    value: 0.7
  },
  {
    id: 'anotherSkill',
    name: 'Teamwork',
    value: 0.5
  }
]

const skills = (state: SkillsState = defaultState, { type, id, value }: Action = {}): SkillsState => {
  switch (type) {
    case SET_SKILL_VALUE:
      let exists = false
      const nextState = state.map((skill) => {
        if (skill.id !== id) return skill
        exists = true
        return Object.assign({}, skill, { value })
      })
      return exists
        ? nextState
        : state
    default:
      return state
  }
}

export default skills
