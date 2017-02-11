import { db } from '../firebase'
import type { IdToValueMap } from '../types'

export const writeUserProperty = (userId: string, property: string, value: *): Promise<*> =>
  db.ref(`users/${userId}/${property}`).set(value)

export const writeUserIdeals = (userId: string, companyValues: IdToValueMap): Promise<*> =>
  writeUserProperty(userId, 'ideals', companyValues)

export const writeUserSkills = (userId: string, skills: IdToValueMap): Promise<*> =>
  writeUserProperty(userId, 'skills', skills)
