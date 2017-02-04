import reducer, { defaultState } from './user'
import { setUser } from '../actions/user'

describe('user', () => {
  it('returns its default state', () => {
    expect(reducer(undefined, {})).toBe(defaultState)
  })

  describe('setUser', () => {
    it('replaces state with the given user', () => {
      const state = null
      Object.freeze(state)

      const newState = reducer(state, setUser({
        id: 'some',
        name: 'guy'
      }))
      expect(newState).toEqual({
        id: 'some',
        name: 'guy'
      })
      Object.freeze(newState)

      const newStateB = reducer(newState, setUser({
        id: 'timmy',
        email: 'timmy@tester.com',
        name: 'Timmy'
      }))
      expect(newStateB).toEqual({
        id: 'timmy',
        email: 'timmy@tester.com',
        name: 'Timmy'
      })
    })
  })
})
