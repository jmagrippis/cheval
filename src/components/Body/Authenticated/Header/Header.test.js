import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('Header', () => {
  let component

  beforeEach(() => {
    const props = {}
    component = shallow(<Header {...props} />)
  })

  it('renders without crashing', () => {
    expect(component.length).toBe(1)
  })
})
