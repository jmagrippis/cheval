/* @flow */

// Common
export type IdToValueMap = { [key: string]: number }

// State
export type CompanyValue = {
  id: string,
  name: string,
  value: number
}

export type CompanyValuesState = Array<CompanyValue>

export type Skill = {
  id: string,
  name: string,
  value: number
}

export type SkillsState = Array<Skill>

export type FirebaseUser = {
  uid: string,
  displayName: string,
  email: string,
  isAnonymous: boolean,
  photoURL: string
}
export type User = {
  id: string,
  avatar: string,
  email: string,
  name: string,
  role: string,
  company: ?string
}

export type FetchingState = {
  auth: boolean
}

export type AppState = {
  companyValues: CompanyValuesState,
  fetching: FetchingState,
  skills: SkillsState,
  user: ?User
}

// Actions

export type SET_COMPANY_VALUES_ACTION = {
  type: 'SET_COMPANY_VALUES',
  companyValues: Array<Skill>
}

export type SET_COMPANY_VALUE_VALUE_ACTION = {
  type: 'SET_COMPANY_VALUE_VALUE',
  id: string,
  value: number
}

export type COMPANY_VALUES_ACTION = SET_COMPANY_VALUES_ACTION & SET_COMPANY_VALUE_VALUE_ACTION

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
