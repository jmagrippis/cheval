/* @flow */

import { SET_USER } from '../constants/actionTypes'
import type { SET_USER_ACTION, User } from '../types'

export const defaultState = null

const user = (state: ?User = defaultState, { type, user }: SET_USER_ACTION = {}): ?User => {
  switch (type) {
    case SET_USER:
      return user
    default:
      return state
  }
}

export default user
