/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Assessment from './Assessment/Assessment'
import Header from './Header/Header'
import type { IdealsState, SkillsState, User } from '../../../types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

type Props = {
  company: ?string,
  ideals: IdealsState,
  setIdealValue: Function,
  setSkillValue: Function,
  skills: SkillsState,
  user: User
};

class Authenticated extends PureComponent {
  props: Props;

  render () {
    const {
      company,
      ideals,
      skills,
      setIdealValue,
      setSkillValue,
      user
    } = this.props
    return (
      <Container>
        <Header
          avatar={user.avatar}
          name={user.name}
        />
        <Assessment
          company={company}
          ideals={ideals}
          role={user.role}
          setIdealValue={setIdealValue}
          setSkillValue={setSkillValue}
          skills={skills}
        />
      </Container>
    )
  }
}

export default Authenticated
