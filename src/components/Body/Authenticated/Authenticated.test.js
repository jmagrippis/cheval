import React from 'react'
import { shallow } from 'enzyme'

import Authenticated from './Authenticated'

describe('Authenticated', () => {
  let component

  beforeEach(() => {
    const props = {
      user: {
        name: 'Timmy Tester'
      }
    }
    component = shallow(<Authenticated {...props} />)
  })

  it('renders without crashing', () => {
    expect(component.length).toBe(1)
  })
})
