import {
  getCompanyValuesIdValuesMap,
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

  describe('getCompanyValuesIdValuesMap', () => {
    it('returns the skill values keyed to their ids', () => {
      const state = {
        companyValues: [
          { id: 'some', value: 0.5 },
          { id: 'companyValues', value: 0.75 }
        ]
      }

      expect(getCompanyValuesIdValuesMap(state)).toEqual({
        some: 0.5,
        companyValues: 0.75
      })

      const stateB = {
        companyValues: [
          { id: 'another', value: 0.11 }
        ]
      }

      expect(getCompanyValuesIdValuesMap(stateB)).toEqual({ another: 0.11 })

      expect(getCompanyValuesIdValuesMap({ companyValues: [] })).toEqual({})
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
