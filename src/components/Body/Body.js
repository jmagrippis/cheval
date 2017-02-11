/* @flow */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import AppLoading from './AppLoading/AppLoading'
import Authenticated from './Authenticated/Authenticated'
import Login from './Login/Login'
import { setIdealValue } from '../../actions/ideals'
import { setSkillValue } from '../../actions/skills'
import type { AppState, IdealsState, SkillsState, User } from '../../types'

type Props = {
  authenticating: Boolean,
  ideals: IdealsState,
  setIdealValue: Function,
  setSkillValue: Function,
  skills: SkillsState,
  user: ?User
};

export class Body extends PureComponent {
  props: Props;

  render () {
    const {
      authenticating,
      ideals,
      skills,
      setIdealValue,
      setSkillValue,
      user
    } = this.props
    if (authenticating) return <AppLoading />
    return user
      ? (
        <Authenticated
          company={user.company}
          ideals={ideals}
          setIdealValue={setIdealValue}
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
  ideals: state.ideals,
  skills: state.skills,
  user: state.user
})

export const mapDispatchToProps = (dispatch: Function) => ({
  setIdealValue (id: string, value: number) {
    return dispatch(setIdealValue(id, value))
  },
  setSkillValue (id: string, value: number) {
    return dispatch(setSkillValue(id, value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
