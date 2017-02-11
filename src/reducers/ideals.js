/* @flow */

import { SET_IDEALS, SET_IDEAL_VALUE } from '../constants/actionTypes'
import type { IDEALS_ACTION, IdealsState } from '../types'

export const defaultState = []

const ideals = (state: IdealsState = defaultState, action: IDEALS_ACTION): IdealsState => {
  switch (action.type) {
    case SET_IDEALS:
      return action.ideals
    case SET_IDEAL_VALUE:
      let exists = false
      const nextState = state.map((ideal) => {
        if (ideal.id !== action.id) return ideal
        exists = true
        return Object.assign({}, ideal, { value: action.value })
      })
      return exists
        ? nextState
        : state
    default:
      return state
  }
}

export default ideals
