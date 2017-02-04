/* @flow */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Assessment from './Assessment/Assessment'
import Login from './Login/Login'
import { setSkillValue } from '../../actions/skills'
import type { AppState, SkillsState, User } from '../../types'

type Props = {
  setSkillValue: Function,
  skills: SkillsState,
  user: ?User
};

export class Body extends PureComponent {
  props: Props;

  render () {
    const { skills, setSkillValue, user } = this.props
    return user
      ? (
        <Assessment
          setSkillValue={setSkillValue}
          skills={skills}
        />
      )
      : <Login />
  }
}

export const mapStateToProps = (state: AppState): { skills: SkillsState } => ({
  skills: state.skills,
  user: state.user
})

export const mapDispatchToProps = (dispatch: Function) => ({
  setSkillValue (id: string, value: number) {
    return dispatch(setSkillValue(id, value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
