import React from 'react'
import { shallow } from 'enzyme'
import { Error } from '../index'

describe('Error', () => {
  it('should be defined', () => {
    expect(Error).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(<Error />)

    expect(wrapper).toMatchSnapshot()
  })
})
