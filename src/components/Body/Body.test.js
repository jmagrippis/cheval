import React from 'react'
import { shallow } from 'enzyme'

import Body from './Body'

describe('Body', () => {
  it('renders without crashing', () => {
    const component = shallow(<Body />)
    expect(component.length).toBe(1)
  })
})
