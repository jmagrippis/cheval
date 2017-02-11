import { call, select } from 'redux-saga/effects'

import { persistCompanyValues } from './companyValues'
import { writeUserCompanyValues } from '../firebase'
import { getCompanyValuesIdValuesMap, getUserId } from '../reducers'

describe('persistCompanyValues', () => {
  describe('when no user id', () => {
    const iterator = persistCompanyValues()

    it('yields to the `getUserId` and `getCompanyValuesIdValuesMap` selectors', () => {
      const value = iterator.next().value
      expect(value).toEqual([
        select(getUserId),
        select(getCompanyValuesIdValuesMap)
      ])
    })

    it('early outs / is done', () => {
      expect(iterator.next([]).done).toBe(true)
    })
  })

  describe('when there is a user id', () => {
    const iterator = persistCompanyValues()

    it('yields to the `getUserId` and `getCompanyValuesIdValuesMap` selectors', () => {
      const value = iterator.next().value
      expect(value).toEqual([
        select(getUserId),
        select(getCompanyValuesIdValuesMap)
      ])
    })

    it('calls the `writeUserCompanyValues` method', () => {
      const userId = 'some-user'
      const skills = { some: 0.5, skills: 0.75 }
      const value = iterator.next([userId, skills]).value
      expect(value).toEqual(call(writeUserCompanyValues, userId, skills))
    })

    it('is done', () => {
      expect(iterator.next().done).toBe(true)
    })
  })
})
