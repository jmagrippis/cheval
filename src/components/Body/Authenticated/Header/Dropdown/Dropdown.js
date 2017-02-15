/* @flow */

import React, { PureComponent } from 'react'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover'

import { auth } from '../../../../../firebase'

type Props = {
  avatar: string,
  label: string
}

type State = {
  anchor?: Object,
  open: boolean
}

class Dropdown extends PureComponent {
  props: Props

  state: State = {
    open: false
  }

  static muiName = 'FlatButton'

  show = (event: Event) => {
    event.preventDefault()

    this.setState({
      anchor: event.currentTarget,
      open: true
    })
  }

  hide = () => {
    event.preventDefault()

    this.setState({
      open: false
    })
  }

  signOut () {
    auth.signOut()
  }

  render () {
    const { avatar, label } = this.props
    return (
      <div>
        <FlatButton
          {...this.props}
          onTouchTap={this.show}
          icon={<Avatar size={32} src={avatar} />}
          label={label}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchor}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          onRequestClose={this.hide}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" onTouchTap={this.signOut} />
          </Menu>
        </Popover>
      </div>
    )
  }
}

export default Dropdown
