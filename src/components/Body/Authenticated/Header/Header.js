/* @flow */

import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import PieChart from 'material-ui/svg-icons/editor/pie-chart'

import Dropdown from './Dropdown/Dropdown'

type Props = {
  avatar: string,
  name: string
}

class Header extends PureComponent {
  props: Props

  render () {
    const { avatar, name } = this.props
    return (
      <AppBar
        title="Cheval"
        iconElementLeft={(
          <IconButton href='/'>
            <PieChart />
          </IconButton>
        )}
        iconElementRight={(
          <Dropdown
            avatar={avatar}
            label={name}
          />
        )}
      />
    )
  }
}

export default Header
