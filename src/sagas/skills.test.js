import { call, select } from 'redux-saga/effects'

import { persistSkillValues } from './skills'
import { writeUserSkills } from '../firebase'
import { getSkillIdValuesMap, getUserId } from '../reducers'

describe('persistSkillValues', () => {
  describe('when no user id', () => {
    const iterator = persistSkillValues()

    it('yields to the `getUserId` and `getSkillIdValuesMap` selectors', () => {
      const value = iterator.next().value
      expect(value).toEqual([
        select(getUserId),
        select(getSkillIdValuesMap)
      ])
    })

    it('early outs / is done', () => {
      expect(iterator.next([]).done).toBe(true)
    })
  })

  describe('when there is a user id', () => {
    const iterator = persistSkillValues()

    it('yields to the `getUserId` and `getSkillIdValuesMap` selectors', () => {
      const value = iterator.next().value
      expect(value).toEqual([
        select(getUserId),
        select(getSkillIdValuesMap)
      ])
    })

    it('calls the `writeUserSkills` method', () => {
      const userId = 'some-user'
      const skills = { some: 0.5, skills: 0.75 }
      const value = iterator.next([userId, skills]).value
      expect(value).toEqual(call(writeUserSkills, userId, skills))
    })

    it('is done', () => {
      expect(iterator.next().done).toBe(true)
    })
  })
})
