/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { inputCls, symbolCls, labelCls } from './styles'

interface Props {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  symbol: string
}

export const Input: React.FC<Props> = ({ value, onChange, symbol }) => {
  return (
    <label css={labelCls}>
      <span css={symbolCls}>{symbol}</span>
      <input
        css={inputCls}
        type="text"
        value={value || ''}
        onChange={onChange}
      />
    </label>
  )
}
