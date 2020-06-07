/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { FlexBox, Container, Body } from '../../components'

export const App: React.FC = () => {
  return (
    <Body>
      <Container center>
        <FlexBox column>
          Currency Converter
        </FlexBox>
      </Container>
    </Body>
  )
}
