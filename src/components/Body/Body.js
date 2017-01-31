/* @flow */

import React, { Component } from 'react'
import Slider from 'material-ui/Slider'

class Body extends Component {
  state = {
    firstSkill: 0.5
  }

  handleFirstSkill = (event: Object, firstSkill: number) => {
    this.setState({ firstSkill })
  }

  render () {
    return (
      <div>
        <div>
          <h2>Rate your skills!</h2>
        </div>
        <Slider
          defaultValue={0.5}
          value={this.state.firstSkill}
          onChange={this.handleFirstSkill}
        />
      </div>
    )
  }
}

export default Body
