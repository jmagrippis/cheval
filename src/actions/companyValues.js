/* @flow */

import { SET_COMPANY_VALUES, SET_COMPANY_VALUE_VALUE } from '../constants/actionTypes'
import type { SET_COMPANY_VALUES_ACTION, SET_COMPANY_VALUE_VALUE_ACTION, CompanyValue } from '../types'

export const setCompanyValues = (companyValues: Array<CompanyValue>): SET_COMPANY_VALUES_ACTION => ({
  companyValues,
  type: SET_COMPANY_VALUES
})

export const setCompanyValueValue = (id: string, value: number): SET_COMPANY_VALUE_VALUE_ACTION => ({
  id,
  value,
  type: SET_COMPANY_VALUE_VALUE
})
