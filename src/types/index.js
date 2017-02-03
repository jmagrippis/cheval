/* @flow */

export type Skill = {
  id: string,
  name: string,
  value: number
}

export type SkillsState = Array<Skill>

export type AppState = {
  skills: SkillsState
}

export type SET_SKILL_VALUE_ACTION = {
  type: 'SET_SKILL_VALUE',
  id: string,
  value: number
}

export type Action = SET_SKILL_VALUE_ACTION
