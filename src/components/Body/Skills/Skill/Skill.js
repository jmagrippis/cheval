/* @flow */

import React, { Component } from 'react'
import Slider from 'material-ui/Slider'

type Props = {
  name: string,
  onChange: Function,
  value: number
};

class Skill extends Component {
  props: Props;

  render () {
    const { name, onChange, value } = this.props

    return (
      <div>
        <div>{name}</div>
        <Slider
          defaultValue={0.5}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
}

export default Skill
