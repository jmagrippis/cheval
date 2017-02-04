/* @flow */

import React, { Component } from 'react'
import styled from 'styled-components'

import Skill from './Skill/Skill'
import type { SkillsState } from '../../../../types'

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

type Props = {
  setSkillValue: Function,
  skills: SkillsState
};

type DefaultProps = {
  skills: SkillsState
}

class Skills extends Component {
  props: Props;

  static defaultProps: DefaultProps

  render () {
    const { skills, setSkillValue } = this.props

    return (
      <Container>
        {skills.map(({ id, name, value }) => (
          <Skill
            key={id}
            name={name}
            onChange={(event, value) => setSkillValue(id, value)}
            value={value}
          />
        ))}
      </Container>
    )
  }
}

Skills.defaultProps = {
  skills: []
}

export default Skills
