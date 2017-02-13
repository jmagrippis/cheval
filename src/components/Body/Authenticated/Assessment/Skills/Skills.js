/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Skill from './Skill/Skill'
import type { SkillsState } from '../../../../../types'

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

class Skills extends PureComponent {
  props: Props;

  static defaultProps: DefaultProps

  render () {
    const { skills, setSkillValue } = this.props

    return (
      <Container>
        {skills.map(({ description, id, name, value }) => (
          <Skill
            key={id}
            description={description}
            id={id}
            name={name}
            setSkillValue={setSkillValue}
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
