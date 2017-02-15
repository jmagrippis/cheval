import React from 'react'
import { shallow } from 'enzyme'

import Dropdown from './Dropdown'

describe('Dropdown', () => {
  let component

  beforeEach(() => {
    const props = {}
    component = shallow(<Dropdown {...props} />)
  })

  it('renders without crashing', () => {
    expect(component.length).toBe(1)
  })
})
