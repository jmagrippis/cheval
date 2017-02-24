/* @flow */

import React, { PureComponent } from 'react'
import IconButton from 'material-ui/IconButton'
import { teal500 } from 'material-ui/styles/colors'
import Favorite from 'material-ui/svg-icons/action/favorite'

import styled, { keyframes } from 'styled-components'

const heartBeat = keyframes `
    0%
    {
        transform: scale( .75 );
    }
    20%
    {
        transform: scale( 1 );
    }
    40%
    {
        transform: scale( .75 );
    }
    60%
    {
        transform: scale( 1 );
    }
    80%
    {
        transform: scale( .75 );
    }
    100%
    {
        transform: scale( .75 );
    }
`

const StyledSpan = styled.span`
  display: inline;
  padding-top: 17px;
`

const StyledFooter = styled.footer`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledButton = styled(IconButton)`
  animation: ${heartBeat} 2s infinite;
`

class Footer extends PureComponent {

  render () {
    return (
      <StyledFooter>
        <StyledSpan>Made with</StyledSpan>
        <StyledButton iconStyle={{ color: teal500 }} href="https://github.com/jmagrippis/cheval">
          <Favorite />
        </StyledButton>
        <StyledSpan>by TripTease</StyledSpan>
      </StyledFooter>
    )
  }
}

export default Footer
