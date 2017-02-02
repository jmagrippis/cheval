/* @flow */

import React, { Component } from 'react'
import map from 'lodash/map'
import styled from 'styled-components'

import Skill from './Skill/Skill'

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

type Props = {
  setSkillValue: Function,
  skills: { [key:string]: Object }
};

class Skills extends Component {
  props: Props;

  render () {
    const { skills, setSkillValue } = this.props

    return (
      <Container>
        {map(skills, ({ id, name, value }) => (
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

export default Skills
