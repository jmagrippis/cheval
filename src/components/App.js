/* @flow */

import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { teal500, teal700, orangeA200 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Body from './Body/Body'

const muiTheme = getMuiTheme({
  fontFamily: 'Raleway, sans-serif',
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
    accent1Color: orangeA200,
    pickerHeaderColor: teal500
  }
})

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Body />
      </MuiThemeProvider>
    )
  }
}

export default App
