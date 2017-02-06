/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Skills from './Skills/Skills'
import type { SkillsState } from '../../../../types'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.h1`
  padding: 0.5em 0;
  font-size: 2em;
  line-height: 2em;
  text-align: center;
`
const Role = styled.div`
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: center;
  text-transform: capitalize;
`

type Props = {
  role: string,
  setSkillValue: Function,
  skills: SkillsState
};

class Assessment extends PureComponent {
  props: Props;

  render () {
    const { role, skills, setSkillValue } = this.props
    return (
      <Container>
        <Title>Rate your skills!</Title>
        <Role>Role: {role}</Role>
        <Skills
          setSkillValue={setSkillValue}
          skills={skills}
        />
      </Container>
    )
  }
}

export default Assessment
