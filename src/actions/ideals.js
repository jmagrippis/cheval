/* @flow */

import { SET_IDEALS, SET_IDEAL_VALUE } from '../constants/actionTypes'
import type { SET_IDEALS_ACTION, SET_IDEAL_VALUE_ACTION, Ideal } from '../types'

export const setIdeals = (ideals: Array<Ideal>): SET_IDEALS_ACTION => ({
  ideals,
  type: SET_IDEALS
})

export const setIdealValue = (id: string, value: number): SET_IDEAL_VALUE_ACTION => ({
  id,
  value,
  type: SET_IDEAL_VALUE
})
