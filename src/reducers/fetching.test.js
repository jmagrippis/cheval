import reducer, { defaultState } from './fetching'
import { setUser } from '../actions/user'

describe('fetching', () => {
  it('returns its default state', () => {
    expect(reducer(undefined, {})).toBe(defaultState)
  })

  describe('setUser', () => {
    it('sets the `auth` part of the state to `false`', () => {
      const state = {
        auth: true,
        skills: true
      }
      Object.freeze(state)

      const newState = reducer(state, setUser())
      expect(newState).toEqual({
        auth: false,
        skills: true
      })
    })

    it('returns the same state if `auth` is already `false`', () => {
      const state = {
        auth: false,
        skills: true
      }
      Object.freeze(state)

      const newState = reducer(state, setUser())
      expect(newState).toBe(state)
    })
  })
})
