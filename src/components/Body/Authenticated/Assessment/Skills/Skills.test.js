import React from 'react'
import { shallow } from 'enzyme'

import Skills from './Skills'

describe('Skills', () => {
  it('renders without crashing', () => {
    const component = shallow(<Skills />)
    expect(component.length).toBe(1)
  })
})
