/* @flow */

// Common
export type IdToValueMap = { [key: string]: number }

// State
export type Ideal = {
  id: string,
  name: string,
  value: number
}

export type IdealsState = Array<Ideal>

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
  role: string,
  company: ?string
}

export type FirebaseUser = {
  uid: string,
  displayName: string,
  email: string,
  isAnonymous: boolean,
  photoURL: string
}

export type FetchingState = {
  auth: boolean
}

export type AppState = {
  fetching: FetchingState,
  ideals: IdealsState,
  skills: SkillsState,
  user: ?User
}

// Actions

export type SET_IDEALS_ACTION = {
  type: 'SET_IDEALS',
  ideals: Array<Skill>
}

export type SET_IDEAL_VALUE_ACTION = {
  type: 'SET_IDEAL_VALUE',
  id: string,
  value: number
}

export type IDEALS_ACTION = SET_IDEALS_ACTION & SET_IDEAL_VALUE_ACTION

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
