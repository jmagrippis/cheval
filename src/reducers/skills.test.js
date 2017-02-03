import reducer, { defaultState } from './skills'
import { setSkillValue } from '../actions/skills'

describe('skills', () => {
  it('returns its default state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
  })

  describe('setSkillValue', () => {
    it('updates the skills with the given id with the given value', () => {
      const state = [
        {
          id: 'some-skill',
          name: 'Some Skill',
          value: 0.6
        },
        {
          id: 'anotherSkill',
          name: 'Cooking',
          value: 0.1
        }
      ]
      Object.freeze(state)

      const newState = reducer(state, setSkillValue('some-skill', 1))
      expect(newState).toEqual([
        {
          id: 'some-skill',
          name: 'Some Skill',
          value: 1
        },
        {
          id: 'anotherSkill',
          name: 'Cooking',
          value: 0.1
        }
      ])
      Object.freeze(newState)

      const newStateB = reducer(newState, setSkillValue('anotherSkill', 0.55))
      expect(newStateB).toEqual([
        {
          id: 'some-skill',
          name: 'Some Skill',
          value: 1
        },
        {
          id: 'anotherSkill',
          name: 'Cooking',
          value: 0.55
        }
      ])
    })

    it('returns the same state if the skill with the given id does not exist', () => {
      const state = [
        {
          id: 'some-skill',
          name: 'Some Skill',
          value: 0.6
        }
      ]
      Object.freeze(state)

      expect(reducer(state, setSkillValue('non-existant', 1))).toBe(state)
    })
  })
})
