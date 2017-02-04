import React from 'react'
import { shallow } from 'enzyme'

import Assessment from './Assessment'

describe('Assessment', () => {
  it('renders without crashing', () => {
    const component = shallow(<Assessment />)
    expect(component.length).toBe(1)
  })
})
