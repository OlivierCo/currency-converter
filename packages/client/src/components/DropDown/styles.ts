import { css } from '@emotion/core'
import { PositionProperty } from 'csstype'

export const dropdownCls = css({
  position: <PositionProperty>'relative',
  textAlign: 'center',
  width: '100%',
})

export const dropdownboxCls = css({
  flexDirection: 'column',
  width: '100%',
  height: 300,
  top: 48,
})
