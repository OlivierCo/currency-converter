import {
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
} from 'graphql'
import { DailyRate } from './resolver'

const GraphQLCurrencyEnum = new GraphQLEnumType({
  name: 'GraphQLCurrencyEnum',
  values: {
    USD: { value: 'USD' },
    JPY: { value: 'JPY' },
    BGN: { value: 'BGN' },
    CZK: { value: 'CZK' },
    DKK: { value: 'DKK' },
    GBP: { value: 'GBP' },
    HUF: { value: 'HUF' },
    PLN: { value: 'PLN' },
    RON: { value: 'RON' },
    SEK: { value: 'SEK' },
    CHF: { value: 'CHF' },
    ISK: { value: 'ISK' },
    NOK: { value: 'NOK' },
    HRK: { value: 'HRK' },
    RUB: { value: 'RUB' },
    TRY: { value: 'TRY' },
    AUD: { value: 'AUD' },
    BRL: { value: 'BRL' },
    CAD: { value: 'CAD' },
    CNY: { value: 'CNY' },
    HKD: { value: 'HKD' },
    IDR: { value: 'IDR' },
    ILS: { value: 'ILS' },
    INR: { value: 'INR' },
    KRW: { value: 'KRW' },
    MXN: { value: 'MXN' },
    MYR: { value: 'MYR' },
    NZD: { value: 'NZD' },
    PHP: { value: 'PHP' },
    SGD: { value: 'SGD' },
    THB: { value: 'THB' },
    ZAR: { value: 'ZAR' },
  },
})

export const GraphQLDailyRate = new GraphQLObjectType({
  name: 'GraphQLDailyRate',
  description: 'Daily Rate response',
  fields: {
    currency: {
      type: new GraphQLNonNull(GraphQLCurrencyEnum),
      description: 'currency',
    },
    rate: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'rate for the according currency',
      resolve: (src: DailyRate) => +src.rate,
    },
    symbol: { type: new GraphQLNonNull(GraphQLString) },
  },
})
