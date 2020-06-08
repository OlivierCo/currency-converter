/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { v4 as uuid } from 'uuid'
import { DailyRate } from '../../../../common/types'
import { DropDown, FlexBox, Container } from '../../../../components'
import { reducer, init, initialState, ActionType } from './reducer'
import { Input } from './components/Input'
import { converter, item, rate, box } from './styles'
import { Split } from './components/Split'

interface Props {
  data: DailyRate[]
}

export const Converter: React.FC<Props> = ({ data }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState, init)
  const { right, left } = state
  const handleOnChangeInput = (
    type: ActionType,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    e.preventDefault()
    dispatch({ type, value: e.target.value })
  }
  const handleOnItemClick = (type: ActionType, payload: DailyRate) => {
    dispatch({ type, payload })
  }

  return (
    <FlexBox css={converter}>
      <FlexBox column="true" css={box}>
        <div css={rate} />
        <DropDown name={left.name || left.currency}>
          <Container scrollable css={{ zIndex: 10 }}>
            <FlexBox column="true">
              {data.map((obj) => (
                <span
                  css={item}
                  key={uuid()}
                  onClick={() => handleOnItemClick('SET_LEFT', obj)}
                >
                  {obj.name || obj.currency}
                </span>
              ))}
            </FlexBox>
          </Container>
        </DropDown>
        <Input
          value={left.inputValue}
          onChange={(e) => handleOnChangeInput('SET_LEFT_INPUT_VALUE', e)}
          symbol={left.symbol}
        />
      </FlexBox>
      <Split />
      <FlexBox column="true" css={box}>
        <div css={rate} />
        <DropDown name={right.name || right.currency}>
          <Container scrollable css={{ zIndex: 10 }}>
            <FlexBox column="true">
              {data.map((obj) => (
                <span
                  css={item}
                  key={uuid()}
                  onClick={() => handleOnItemClick('SET_RIGHT', obj)}
                >
                  {obj.name || obj.currency}
                </span>
              ))}
            </FlexBox>
          </Container>
        </DropDown>
        <Input
          value={right.inputValue}
          onChange={(e) => handleOnChangeInput('SET_RIGHT_INPUT_VALUE', e)}
          symbol={right.symbol}
        />
      </FlexBox>
    </FlexBox>
  )
}
