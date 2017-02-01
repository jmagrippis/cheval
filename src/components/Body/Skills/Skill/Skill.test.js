import React from 'react'
import { shallow } from 'enzyme'

import Skill from './Skill'

describe('Skill', () => {
  it('renders without crashing', () => {
    const component = shallow(<Skill />)
    expect(component.length).toBe(1)
  })
})
