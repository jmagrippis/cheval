/* @flow */

import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
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
        <Paper style={{ marginBottom: '1em', padding: '1em' }} zDepth={1}>
          <div>{name}</div>
          <Slider
            defaultValue={0.5}
            name={name}
            sliderStyle={{ margin: '2em 0' }}
            value={value}
            onChange={this.onChange}
          />
        </Paper>
      </Container>
    )
  }
}

export default Skill
