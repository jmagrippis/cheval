/* @flow */

import React, { PureComponent } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

class AppLoading extends PureComponent {
  render () {
    return (
      <Container>
        <CircularProgress size={128}/>
      </Container>
    )
  }
}

export default AppLoading
