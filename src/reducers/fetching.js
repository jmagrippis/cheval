/* @flow */

import { SET_USER } from '../constants/actionTypes'
import type { SET_USER_ACTION, FetchingState } from '../types'

export const defaultState = {
  auth: true
}

const fetching = (state: FetchingState = defaultState, { type }: SET_USER_ACTION = {}): FetchingState => {
  switch (type) {
    case SET_USER:
      return state.auth === true
        ? Object.assign({}, state, { auth: false })
        : state
    default:
      return state
  }
}

export default fetching
