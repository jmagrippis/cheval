/* @flow */

import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import PieChart from 'material-ui/svg-icons/editor/pie-chart'

import { auth } from '../../../../firebase'

type Props = {
  avatar: string,
  name: string
};

class Header extends PureComponent {
  props: Props;

  signOut () {
    auth.signOut()
  }

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
          <FlatButton
            icon={<Avatar size={32} src={avatar} />}
            label={name}
            onClick={this.signOut}
          />
        )}
      />
    )
  }
}

export default Header
