/* @flow */

import { combineReducers } from 'redux'

import skills from './skills'
import user from './user'

const cheval = combineReducers({
  skills,
  user
})

export default cheval
