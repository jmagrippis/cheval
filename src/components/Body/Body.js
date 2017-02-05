/* @flow */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import AppLoading from './AppLoading/AppLoading'
import Authenticated from './Authenticated/Authenticated'
import Login from './Login/Login'
import { setSkillValue } from '../../actions/skills'
import type { AppState, SkillsState, User } from '../../types'

type Props = {
  authenticating: Boolean,
  setSkillValue: Function,
  skills: SkillsState,
  user: ?User
};

export class Body extends PureComponent {
  props: Props;

  render () {
    const { authenticating, skills, setSkillValue, user } = this.props
    if (authenticating) return <AppLoading />
    return user
      ? (
        <Authenticated
          setSkillValue={setSkillValue}
          skills={skills}
          user={user}
        />
      )
      : <Login />
  }
}

export const mapStateToProps = (state: AppState): { skills: SkillsState } => ({
  authenticating: state.fetching.auth,
  skills: state.skills,
  user: state.user
})

export const mapDispatchToProps = (dispatch: Function) => ({
  setSkillValue (id: string, value: number) {
    return dispatch(setSkillValue(id, value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
