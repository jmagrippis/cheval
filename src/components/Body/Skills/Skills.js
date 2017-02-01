/* @flow */

import React, { Component } from 'react'
import map from 'lodash/map'

import Skill from './Skill/Skill'

type Props = {
  setSkillValue: Function,
  skills: { [key:string]: Object }
};

class Skills extends Component {
  props: Props;

  render () {
    const { skills, setSkillValue } = this.props

    return (
      <div>
        {map(skills, ({ id, name, value }) => (
          <Skill
            key={id}
            name={name}
            onChange={(event, value) => setSkillValue(id, value)}
            value={value}
          />
        ))}
      </div>
    )
  }
}

export default Skills
