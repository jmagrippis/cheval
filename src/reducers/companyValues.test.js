import reducer, { defaultState } from './companyValues'
import { setCompanyValues, setCompanyValueValue } from '../actions/companyValues'

describe('companyValues', () => {
  it('returns its default state', () => {
    expect(reducer(undefined, {})).toBe(defaultState)
  })

  describe('setCompanyValues', () => {
    it('replaces the current state with the given companyValues', () => {
      const state = []
      Object.freeze(state)
      const companyValues = [
        {
          id: 'some-value',
          name: 'Some Value',
          value: 0.6
        },
        {
          id: 'anotherValue',
          name: 'Cooking',
          value: 0.1
        }
      ]
      const newState = reducer(state, setCompanyValues(companyValues))
      expect(newState).toBe(companyValues)

      Object.freeze(newState)
      const moreValues = [
        {
          id: 'ultimate-value',
          name: 'Ultimate Value',
          value: 0.99
        }
      ]

      const newStateB = reducer(newState, setCompanyValues(moreValues))
      expect(newStateB).toBe(moreValues)

      Object.freeze(newStateB)
      const emptyArray = []
      expect(reducer(newStateB, setCompanyValues(emptyArray))).toBe(emptyArray)
    })
  })

  describe('setCompanyValueValue', () => {
    it('updates the companyValues with the given id with the given value', () => {
      const state = [
        {
          id: 'some-value',
          name: 'Some Value',
          value: 0.6
        },
        {
          id: 'anotherValue',
          name: 'Cooking',
          value: 0.1
        }
      ]
      Object.freeze(state)

      const newState = reducer(state, setCompanyValueValue('some-value', 1))
      expect(newState).toEqual([
        {
          id: 'some-value',
          name: 'Some Value',
          value: 1
        },
        {
          id: 'anotherValue',
          name: 'Cooking',
          value: 0.1
        }
      ])
      Object.freeze(newState)

      const newStateB = reducer(newState, setCompanyValueValue('anotherValue', 0.55))
      expect(newStateB).toEqual([
        {
          id: 'some-value',
          name: 'Some Value',
          value: 1
        },
        {
          id: 'anotherValue',
          name: 'Cooking',
          value: 0.55
        }
      ])
    })

    it('returns the same state if the value with the given id does not exist', () => {
      const state = [
        {
          id: 'some-value',
          name: 'Some Value',
          value: 0.6
        }
      ]
      Object.freeze(state)

      expect(reducer(state, setCompanyValueValue('non-existant', 1))).toBe(state)
    })
  })
})
