import { call, select } from 'redux-saga/effects'

import { persistIdeals } from './ideals'
import { writeUserIdeals } from '../db/writers'
import { getIdealsIdValuesMap, getUserId } from '../reducers'

describe('persistIdeals', () => {
  describe('when no user id', () => {
    const iterator = persistIdeals()

    it('yields to the `getUserId` and `getIdealsIdValuesMap` selectors', () => {
      const value = iterator.next().value
      expect(value).toEqual([
        select(getUserId),
        select(getIdealsIdValuesMap)
      ])
    })

    it('early outs / is done', () => {
      expect(iterator.next([]).done).toBe(true)
    })
  })

  describe('when there is a user id', () => {
    const iterator = persistIdeals()

    it('yields to the `getUserId` and `getIdealsIdValuesMap` selectors', () => {
      const value = iterator.next().value
      expect(value).toEqual([
        select(getUserId),
        select(getIdealsIdValuesMap)
      ])
    })

    it('calls the `writeUserIdeals` method', () => {
      const userId = 'some-user'
      const ideals = { some: 0.5, ideals: 0.75 }
      const value = iterator.next([userId, ideals]).value
      expect(value).toEqual(call(writeUserIdeals, userId, ideals))
    })

    it('is done', () => {
      expect(iterator.next().done).toBe(true)
    })
  })
})
