import React from 'react'
import { shallow } from 'enzyme'

import Login from './Login'

describe('Login', () => {
  it('renders without crashing', () => {
    const component = shallow(<Login />)
    expect(component.length).toBe(1)
  })
})
