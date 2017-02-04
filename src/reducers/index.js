/* @flow */

import { combineReducers } from 'redux'

import fetching from './fetching'
import skills from './skills'
import user from './user'

const cheval = combineReducers({
  fetching,
  skills,
  user
})

export default cheval
