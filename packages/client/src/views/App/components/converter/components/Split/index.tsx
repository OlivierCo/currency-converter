/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { FlexBox } from '../../../../../../components'
import { flexCls } from './styles'

export const Split: React.FC = () => {
  return (
    <FlexBox css={flexCls} column="true" align="center" justify="center">
      <svg viewBox="0 0 24 24">
        <path
          fill="green"
          d="M21.71,9.29l-4-4a1,1,0,0,0-1.42,1.42L18.59,9H7a1,1,0,0,0,0,2H21a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,9.29ZM17,13H3a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,15H17a1,1,0,0,0,0-2Z"
        />
      </svg>
    </FlexBox>
  )
}
