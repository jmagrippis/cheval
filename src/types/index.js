/* @flow */

export type Skill = {
  id: string,
  name: string,
  value: number
}

export type SkillsState = Array<Skill>

export type User = {
  id: string,
  avatar: string,
  email: string,
  name: string
}

export type FetchingState = {
  auth: boolean
}

export type AppState = {
  fetching: FetchingState,
  skills: SkillsState,
  user: ?User
}

export type SET_SKILL_VALUE_ACTION = {
  type: 'SET_SKILL_VALUE',
  id: string,
  value: number
}

export type SET_USER_ACTION = {
  type: 'SET_USER',
  user: ?User
}

export type Action = SET_SKILL_VALUE_ACTION |
  SET_USER_ACTION
