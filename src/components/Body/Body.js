/* @flow */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import AppLoading from './AppLoading/AppLoading'
import Authenticated from './Authenticated/Authenticated'
import Login from './Login/Login'
import { setCompanyValueValue } from '../../actions/companyValues'
import { setSkillValue } from '../../actions/skills'
import type { AppState, CompanyValuesState, SkillsState, User } from '../../types'

type Props = {
  authenticating: Boolean,
  companyValues: CompanyValuesState,
  setCompanyValueValue: Function,
  setSkillValue: Function,
  skills: SkillsState,
  user: ?User
};

export class Body extends PureComponent {
  props: Props;

  render () {
    const {
      authenticating,
      companyValues,
      skills,
      setCompanyValueValue,
      setSkillValue,
      user
    } = this.props
    if (authenticating) return <AppLoading />
    return user
      ? (
        <Authenticated
          company={user.company}
          companyValues={companyValues}
          setCompanyValueValue={setCompanyValueValue}
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
  companyValues: state.companyValues,
  skills: state.skills,
  user: state.user
})

export const mapDispatchToProps = (dispatch: Function) => ({
  setCompanyValueValue (id: string, value: number) {
    return dispatch(setCompanyValueValue(id, value))
  },
  setSkillValue (id: string, value: number) {
    return dispatch(setSkillValue(id, value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
