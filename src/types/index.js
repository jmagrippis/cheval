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
  name: string,
  role: string
}

export type FetchingState = {
  auth: boolean
}

export type AppState = {
  fetching: FetchingState,
  skills: SkillsState,
  user: ?User
}

export type SET_SKILLS_ACTION = {
  type: 'SET_SKILLS',
  skills: Array<Skill>
}

export type SET_SKILL_VALUE_ACTION = {
  type: 'SET_SKILL_VALUE',
  id: string,
  value: number
}

export type SKILLS_ACTION = SET_SKILLS_ACTION & SET_SKILL_VALUE_ACTION

export type SET_USER_ACTION = {
  type: 'SET_USER',
  user: ?User
}

export type Action = SKILLS_ACTION &
  SET_USER_ACTION
