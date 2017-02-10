/* @flow */

import { SET_COMPANY_VALUES, SET_COMPANY_VALUE_VALUE } from '../constants/actionTypes'
import type { COMPANY_VALUES_ACTION, CompanyValuesState } from '../types'

export const defaultState = []

const companyValues = (state: CompanyValuesState = defaultState, action: COMPANY_VALUES_ACTION): CompanyValuesState => {
  switch (action.type) {
    case SET_COMPANY_VALUES:
      return action.companyValues
    case SET_COMPANY_VALUE_VALUE:
      let exists = false
      const nextState = state.map((companyValue) => {
        if (companyValue.id !== action.id) return companyValue
        exists = true
        return Object.assign({}, companyValue, { value: action.value })
      })
      return exists
        ? nextState
        : state
    default:
      return state
  }
}

export default companyValues
