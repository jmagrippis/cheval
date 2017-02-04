/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Skills from './Skills/Skills'
import type { SkillsState } from '../../../types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`

type Props = {
  setSkillValue: Function,
  skills: SkillsState
};

class Assessment extends PureComponent {
  props: Props;

  render () {
    const { skills, setSkillValue } = this.props
    return (
      <Container>
        <Title>Rate your skills!</Title>
        <Skills
          setSkillValue={setSkillValue}
          skills={skills}
        />
      </Container>
    )
  }
}

export default Assessment
