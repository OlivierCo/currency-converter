import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { DailyRate } from '../../../common/types'

const DAILY_RATE_QUERY = gql`
  query {
    getDailyRate {
      currency
      rate
      symbol
      name
    }
  }
`

export const useDailyRate = () =>
  useQuery<{ getDailyRate: Array<DailyRate> }>(DAILY_RATE_QUERY)
