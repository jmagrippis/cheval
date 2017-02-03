import * as actionTypes from './actionTypes'

describe('actionTypes', () => {
  it('returns strings named after themselves', () => {
    Object.keys(actionTypes).forEach((key) => {
      expect(actionTypes[key]).toBe(key)
    })
  })
})
