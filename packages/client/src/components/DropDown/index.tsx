/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { Container, Button } from '../index'
import { dropdownCls, dropdownboxCls } from './styles'

type State = boolean

interface Props {
  name: string
  children: React.ReactNode
}

export const DropDown: React.FC<Props> = ({ name, children }) => {
  const [open, setOpen] = React.useState<State>(false)
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setOpen(!open)
  }

  return (
    <Container css={dropdownCls}>
      <Button onClick={(e) => handleButtonClick(e)}>{name}</Button>
      {open && (
        <Container css={dropdownboxCls} scrollable>
          {children}
        </Container>
      )}
    </Container>
  )
}
