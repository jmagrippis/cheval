/* @flow */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Skills from './Skills/Skills'
import { setSkillValue } from '../../actions/skills'
import type { AppState, SkillsState } from '../../types'

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

export class Body extends PureComponent {
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

export const mapStateToProps = (state: AppState): { skills: SkillsState } => ({
  skills: state.skills
})

export const mapDispatchToProps = (dispatch: Function) => ({
  setSkillValue (id: string, value: number) {
    return dispatch(setSkillValue(id, value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
