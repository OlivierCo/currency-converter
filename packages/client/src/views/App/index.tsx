/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { FlexBox, Container, Loading, Error } from '../../components'
import { useDailyRate } from './hooks/useRate'
import { Converter } from './components/converter'
import { appCls, container } from './styles'

export const App: React.FC = () => {
  const { loading, data, error } = useDailyRate()

  if (error) {
    return <Error />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Container center css={container}>
      <FlexBox>
        <h2>Currency Converter</h2>
      </FlexBox>
      <FlexBox css={appCls}>
        <Converter data={data.getDailyRate} />
      </FlexBox>
    </Container>
  )
}
