import {
  getIdealsIdValuesMap,
  getIdValuesMap,
  getSkillIdValuesMap
} from './'

describe('selectors', () => {
  describe('getIdValuesMap', () => {
    it('returns a map of the `value` property of entries in the array, keyed to their `id`s', () => {
      const arr = [
        { id: 'someThing', value: 0.55 },
        { id: 'another', value: 0.5 },
        { id: 'yourBestThing', value: 0.98 },
        { id: 'thePartyTrick', value: 0.9 },
        { id: 'insecurityZone', value: 0.05 }
      ]

      expect(getIdValuesMap(arr)).toEqual({
        someThing: 0.55,
        another: 0.5,
        yourBestThing: 0.98,
        thePartyTrick: 0.9,
        insecurityZone: 0.05
      })

      const newArr = [
        { id: 'otherProps', value: 1, other: 'props', go: 'here', answer: 42 }
      ]
      expect(getIdValuesMap(newArr)).toEqual({ otherProps: 1 })

      expect(getIdValuesMap([])).toEqual({})
    })
  })

  describe('getIdealsIdValuesMap', () => {
    it('returns the skill values keyed to their ids', () => {
      const state = {
        ideals: [
          { id: 'some', value: 0.5 },
          { id: 'ideals', value: 0.75 }
        ]
      }

      expect(getIdealsIdValuesMap(state)).toEqual({
        some: 0.5,
        ideals: 0.75
      })

      const stateB = {
        ideals: [
          { id: 'another', value: 0.11 }
        ]
      }

      expect(getIdealsIdValuesMap(stateB)).toEqual({ another: 0.11 })

      expect(getIdealsIdValuesMap({ ideals: [] })).toEqual({})
    })
  })

  describe('getSkillIdValuesMap', () => {
    it('returns the skill values keyed to their ids', () => {
      const state = {
        skills: [
          { id: 'some', value: 0.5 },
          { id: 'skills', value: 0.75 }
        ]
      }

      expect(getSkillIdValuesMap(state)).toEqual({
        some: 0.5,
        skills: 0.75
      })

      const stateB = {
        skills: [
          { id: 'another', value: 0.11 }
        ]
      }

      expect(getSkillIdValuesMap(stateB)).toEqual({ another: 0.11 })

      expect(getSkillIdValuesMap({ skills: [] })).toEqual({})
    })
  })
})
