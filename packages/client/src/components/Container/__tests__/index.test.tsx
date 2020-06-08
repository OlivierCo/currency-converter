import React from 'react'
import { mount } from 'enzyme'
import { Container } from '../index'

describe('Container', () => {
  it('should render Container with children', () => {
    const wrapper = mount(
      <Container center scrollable>
        <div className="foo">Bar</div>
      </Container>,
    )

    expect(wrapper.contains(<div className="foo">Bar</div>)).toBe(true)
    expect(wrapper.prop('center')).toEqual(true)
    expect(wrapper.prop('scrollable')).toEqual(true)
  })
})
