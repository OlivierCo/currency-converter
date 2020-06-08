import React from 'react'
import { shallow } from 'enzyme'
import { Body } from '../index'

describe('Body', () => {
  it('should render Body with children', () => {
    const wrapper = shallow(
      <Body>
        <div className="foo">Bar</div>
      </Body>,
    )

    expect(wrapper.contains(<div className="foo">Bar</div>)).toBe(true)
  })
})
