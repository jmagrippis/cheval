import { setIdeals, setIdealValue } from './ideals'

describe('ideals', () => {
  describe('setIdeals', () => {
    it('returns a SET_IDEALS action, with a `ideals` property', () => {
      const ideals = [{ id: 'rad' }, { id: 'ideal' }]
      expect(setIdeals(ideals)).toEqual({
        type: 'SET_IDEALS',
        ideals: [{ id: 'rad' }, { id: 'ideal' }]
      })

      expect(setIdeals([])).toEqual({
        type: 'SET_IDEALS',
        ideals: []
      })
    })
  })

  describe('setIdealValue', () => {
    it('returns a SET_IDEAL_VALUE action, with `id` and `value` properties', () => {
      expect(setIdealValue('some-id', 0.1)).toEqual({
        type: 'SET_IDEAL_VALUE',
        id: 'some-id',
        value: 0.1
      })

      expect(setIdealValue('anotherId', 0.99)).toEqual({
        type: 'SET_IDEAL_VALUE',
        id: 'anotherId',
        value: 0.99
      })
    })
  })
})
