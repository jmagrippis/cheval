/* @flow */

import { SET_USER } from '../constants/actionTypes'
import type { SET_USER_ACTION, User } from '../types'

export const setUser = (user: ?User): SET_USER_ACTION => ({
  user,
  type: SET_USER
})
