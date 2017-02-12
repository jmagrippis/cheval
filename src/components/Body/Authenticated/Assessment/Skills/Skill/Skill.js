/* @flow */

import React, { PureComponent } from 'react'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import Slider from 'material-ui/Slider'
import InfoOutline from 'material-ui/svg-icons/action/info-outline'
import styled from 'styled-components'

type Props = {
  description?: string,
  id: string,
  name: string,
  setSkillValue: Function,
  value: number
};

const Container = styled.div`
  width: 100%;
  text-transform: capitalize;
`

const Details = styled.div`
  display: flex;
  align-items: center;
`

class Skill extends PureComponent {
  props: Props;

  onChange = (event: Object, value: number) => {
    const { id, setSkillValue } = this.props
    setSkillValue(id, value)
  }

  render () {
    const { description, name, value } = this.props

    return (
      <Container>
        <Paper style={{ marginBottom: '1em', padding: '1em' }} zDepth={1}>
          <Details>
            {name}
            {description
              ? (
                <IconButton tooltip={description} touch={true} tooltipPosition="top-right">
                  <InfoOutline />
                </IconButton>
              )
              : null}
          </Details>
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
