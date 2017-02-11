import reducer, { defaultState } from './ideals'
import { setIdeals, setIdealValue } from '../actions/ideals'

describe('ideals', () => {
  it('returns its default state', () => {
    expect(reducer(undefined, {})).toBe(defaultState)
  })

  describe('setIdeals', () => {
    it('replaces the current state with the given ideals', () => {
      const state = []
      Object.freeze(state)
      const ideals = [
        {
          id: 'some-ideal',
          name: 'some ideal',
          value: 0.6
        },
        {
          id: 'anotherIdeal',
          name: 'selflessness',
          value: 0.1
        }
      ]
      const newState = reducer(state, setIdeals(ideals))
      expect(newState).toBe(ideals)

      Object.freeze(newState)
      const moreValues = [
        {
          id: 'ultimate-ideal',
          name: 'ultimate ideal',
          value: 0.99
        }
      ]

      const newStateB = reducer(newState, setIdeals(moreValues))
      expect(newStateB).toBe(moreValues)

      Object.freeze(newStateB)
      const emptyArray = []
      expect(reducer(newStateB, setIdeals(emptyArray))).toBe(emptyArray)
    })
  })

  describe('setIdealValue', () => {
    it('updates the ideals with the given id with the given value', () => {
      const state = [
        {
          id: 'some-ideal',
          name: 'some ideal',
          value: 0.6
        },
        {
          id: 'anotherIdeal',
          name: 'selflessness',
          value: 0.1
        }
      ]
      Object.freeze(state)

      const newState = reducer(state, setIdealValue('some-ideal', 1))
      expect(newState).toEqual([
        {
          id: 'some-ideal',
          name: 'some ideal',
          value: 1
        },
        {
          id: 'anotherIdeal',
          name: 'selflessness',
          value: 0.1
        }
      ])
      Object.freeze(newState)

      const newStateB = reducer(newState, setIdealValue('anotherIdeal', 0.55))
      expect(newStateB).toEqual([
        {
          id: 'some-ideal',
          name: 'some ideal',
          value: 1
        },
        {
          id: 'anotherIdeal',
          name: 'selflessness',
          value: 0.55
        }
      ])
    })

    it('returns the same state if the value with the given id does not exist', () => {
      const state = [
        {
          id: 'some-ideal',
          name: 'some ideal',
          value: 0.6
        }
      ]
      Object.freeze(state)

      expect(reducer(state, setIdealValue('non-existant', 1))).toBe(state)
    })
  })
})
