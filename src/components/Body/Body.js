/* @flow */

import React, { Component } from 'react'

import Skills from './Skills/Skills'

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
      <div>
        <div>
          <h2>Rate your skills!</h2>
        </div>
        <Skills
          setSkillValue={this.setSkillValue}
          skills={skills}
        />
      </div>
    )
  }
}

export default Body
