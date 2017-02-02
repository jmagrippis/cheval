/* @flow */

import React, { Component } from 'react'
import styled from 'styled-components'

import Skills from './Skills/Skills'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`

class Body extends Component {
  state = {
    skills: {
      someSkill: {
        id: 'someSkill',
        name: 'Problem-Solving',
        value: 0.7
      },
      anotherSkill: {
        id: 'anotherSkill',
        name: 'Teamwork',
        value: 0.5
      }
    }
  }

  setSkillValue = (id: string, value: number) => {
    this.setState(({ skills }) => ({
      skills: Object.assign({}, skills, {
        [id]: Object.assign({}, skills[id], { value })
      })
    }))
  }

  render () {
    const { skills } = this.state
    return (
      <Container>
        <Title>Rate your skills!</Title>
        <Skills
          setSkillValue={this.setSkillValue}
          skills={skills}
        />
      </Container>
    )
  }
}

export default Body
