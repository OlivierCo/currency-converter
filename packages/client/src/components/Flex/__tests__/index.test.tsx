import React from 'react'
import { shallow, mount } from 'enzyme'
import { FlexBox } from '../index'

describe('FlexBox', () => {
  it('should be defined', () => {
    expect(FlexBox).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(
      <FlexBox>
        <div>test</div>
      </FlexBox>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should get props', () => {
    const wrapper = mount(
      <FlexBox column="true" justify="center" align="center">
        <div>test</div>
      </FlexBox>,
    )

    expect(wrapper.prop('column')).toEqual('true')
    expect(wrapper.prop('justify')).toEqual('center')
    expect(wrapper.prop('align')).toEqual('center')
  })
})
