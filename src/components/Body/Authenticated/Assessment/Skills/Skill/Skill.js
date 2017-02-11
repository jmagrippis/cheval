/* @flow */

import React, { PureComponent } from 'react'
import Slider from 'material-ui/Slider'
import styled from 'styled-components'

type Props = {
  id: string,
  name: string,
  setSkillValue: Function,
  value: number
};

const Container = styled.div`
  width: 100%;
  text-transform: capitalize;
`

class Skill extends PureComponent {
  props: Props;

  onChange = (event: Object, value: number) => {
    const { id, setSkillValue } = this.props
    setSkillValue(id, value)
  }

  render () {
    const { name, value } = this.props

    return (
      <Container>
        <div>{name}</div>
        <Slider
          defaultValue={0.5}
          name={name}
          value={value}
          onChange={this.onChange}
        />
      </Container>
    )
  }
}

export default Skill
