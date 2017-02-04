/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import firebase, { googleProvider } from '../../../firebase'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

class Login extends PureComponent {
  authRedirect () {
    firebase.auth().signInWithRedirect(googleProvider)
  }

  render () {
    return (
      <Container>
        You must login to continue.
        <button onClick={this.authRedirect}>Login via Google</button>
      </Container>
    )
  }
}

export default Login
