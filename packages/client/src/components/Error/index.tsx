/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { FlexBox, Container } from '../index'
import { inner } from './styles'

export const Error: React.FC = () => (
  <Container center>
    <FlexBox css={inner} align="center" justify="center">
      <span>Something went wrong I'm afraid...</span>
    </FlexBox>
  </Container>
)
