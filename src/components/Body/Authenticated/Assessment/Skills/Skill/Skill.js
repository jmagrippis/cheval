/* @flow */

import React, { Component } from 'react'
import Slider from 'material-ui/Slider'
import styled from 'styled-components'

type Props = {
  name: string,
  onChange: Function,
  value: number
};

const Container = styled.div`
  width: 100%;
  text-transform: capitalize;
`

class Skill extends Component {
  props: Props;

  render () {
    const { name, onChange, value } = this.props

    return (
      <Container>
        <div>{name}</div>
        <Slider
          defaultValue={0.5}
          value={value}
          onChange={onChange}
        />
      </Container>
    )
  }
}

export default Skill
