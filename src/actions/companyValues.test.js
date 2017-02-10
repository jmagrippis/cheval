import { setCompanyValues, setCompanyValueValue } from './companyValues'

describe('companyValues', () => {
  describe('setCompanyValues', () => {
    it('returns a SET_COMPANY_VALUES action, with a `companyValues` property', () => {
      const companyValues = [{ id: 'rad' }, { id: 'company-values' }]
      expect(setCompanyValues(companyValues)).toEqual({
        type: 'SET_COMPANY_VALUES',
        companyValues: [{ id: 'rad' }, { id: 'company-values' }]
      })

      expect(setCompanyValues([])).toEqual({
        type: 'SET_COMPANY_VALUES',
        companyValues: []
      })
    })
  })

  describe('setCompanyValueValue', () => {
    it('returns a SET_COMPANY_VALUE_VALUE action, with `id` and `value` properties', () => {
      expect(setCompanyValueValue('some-id', 0.1)).toEqual({
        type: 'SET_COMPANY_VALUE_VALUE',
        id: 'some-id',
        value: 0.1
      })

      expect(setCompanyValueValue('anotherId', 0.99)).toEqual({
        type: 'SET_COMPANY_VALUE_VALUE',
        id: 'anotherId',
        value: 0.99
      })
    })
  })
})
