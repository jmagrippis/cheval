/* @flow */

import React, { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'

import { auth, googleProvider } from '../../../firebase'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Paragraph = styled.p`
  margin-bottom: 2em;
`

class Login extends PureComponent {
  authRedirect () {
    auth.signInWithRedirect(googleProvider)
  }

  render () {
    return (
      <Container>
        <Paragraph>
          You must login to continue.
        </Paragraph>
        <RaisedButton label="Login via Google"
          onClick={this.authRedirect}
          primary
        />
      </Container>
    )
  }
}

export default Login
