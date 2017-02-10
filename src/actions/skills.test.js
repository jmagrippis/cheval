import { setSkills, setSkillValue } from './skills'

describe('skills', () => {
  describe('setSkills', () => {
    it('returns a SET_SKILLS action, with a `skills` property', () => {
      const skills = [{ id: 'mad' }, { id: 'skills' }]
      expect(setSkills(skills)).toEqual({
        type: 'SET_SKILLS',
        skills: [{ id: 'mad' }, { id: 'skills' }]
      })

      expect(setSkills([])).toEqual({
        type: 'SET_SKILLS',
        skills: []
      })
    })
  })

  describe('setSkillValue', () => {
    it('returns a SET_SKILL_VALUE action, with `id` and `value` properties', () => {
      expect(setSkillValue('some-id', 0.1)).toEqual({
        type: 'SET_SKILL_VALUE',
        id: 'some-id',
        value: 0.1
      })

      expect(setSkillValue('anotherId', 0.99)).toEqual({
        type: 'SET_SKILL_VALUE',
        id: 'anotherId',
        value: 0.99
      })
    })
  })
})
