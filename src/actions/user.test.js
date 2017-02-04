import { setUser } from './user'

describe('user', () => {
  describe('setUser', () => {
    it('returns a SET_USER action, with the `user` as a property', () => {
      expect(setUser({ id: 'some', name: 'guy' })).toEqual({
        type: 'SET_USER',
        user: {
          id: 'some',
          name: 'guy'
        }
      })

      expect(setUser({ id: 'another', email: 'user@example.com', name: 'user' })).toEqual({
        type: 'SET_USER',
        user: {
          id: 'another',
          email: 'user@example.com',
          name: 'user'
        }
      })
    })
  })
})
