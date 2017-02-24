import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'

describe('Header', () => {
  let component

  beforeEach(() => {
    const props = {}
    component = shallow(<Footer {...props} />)
  })

  it('renders without crashing', () => {
    expect(component.length).toBe(1)
  })
})
