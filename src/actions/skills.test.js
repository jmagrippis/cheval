import { setSkillValue } from './skills'

describe('skills', () => {
  describe('setSkillValue', () => {
    it('returns a SET_SKILL_VALUE action, with `id` and `value` properties', () => {
      expect(setSkillValue('some-id', 0.1)).toEqual({
        type: 'SET_SKILL_VALUE',
        id: 'some-id',
        value: 0.1
      })
    })
  })
})
