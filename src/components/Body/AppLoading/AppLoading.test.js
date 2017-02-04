import React from 'react'
import { shallow } from 'enzyme'

import AppLoading from './AppLoading'

describe('AppLoading', () => {
  it('renders without crashing', () => {
    const component = shallow(<AppLoading />)
    expect(component.length).toBe(1)
  })
})
