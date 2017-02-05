/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Assessment from './Assessment/Assessment'
import Header from './Header/Header'
import type { SkillsState, User } from '../../../types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

type Props = {
  setSkillValue: Function,
  skills: SkillsState,
  user: User
};

class Authenticated extends PureComponent {
  props: Props;

  render () {
    const { skills, setSkillValue, user } = this.props
    return (
      <Container>
        <Header
          avatar={user.avatar}
          name={user.name}
        />
        <Assessment
          role={user.role}
          setSkillValue={setSkillValue}
          skills={skills}
        />
      </Container>
    )
  }
}

export default Authenticated
