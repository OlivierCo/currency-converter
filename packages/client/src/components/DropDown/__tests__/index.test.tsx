import React from 'react'
import { shallow, mount } from 'enzyme'
import { DropDown } from '../index'

describe('DropDown', () => {
  it('should be defined', () => {
    expect(DropDown).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(
      <DropDown name="SuperName">
        <div className="foo">Bar 1</div>
        <div className="foo">Bar 2 </div>
        <div className="foo">Bar 3</div>
      </DropDown>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render DropDown with children', () => {
    const wrapper = mount(
      <DropDown name="SuperName">
        <div className="foo">Bar 1</div>
        <div className="foo">Bar 2 </div>
        <div className="foo">Bar 3</div>
      </DropDown>,
    )

    expect(wrapper.children().length).toEqual(1)
  })

  it('should get name', () => {
    const wrapper = mount(
      <DropDown name="SuperName">
        <div className="foo">Bar 1</div>
      </DropDown>,
    )

    expect(wrapper.prop('name')).toEqual('SuperName')
  })
})
