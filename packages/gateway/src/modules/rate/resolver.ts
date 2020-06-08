import * as getSymbolFromCurrency from 'currency-symbol-map'
import * as country from 'country-currency-map'
import { get, dailyUrl } from '../../common'

enum CurrencyEnum {
  USD = 'USD',
  JPY = 'JPY',
  BGN = 'BGN',
  CZK = 'CZK',
  DKK = 'DKK',
  GBP = 'GBP',
  HUF = 'HUF',
  PLN = 'PLN',
  RON = 'RON',
  SEK = 'SEK',
  CHF = 'CHF',
  ISK = 'ISK',
  NOK = 'NOK',
  HRK = 'HRK',
  RUB = 'RUB',
  TRY = 'TRY',
  AUD = 'AUD',
  BRL = 'BRL',
  CAD = 'CAD',
  CNY = 'CNY',
  HKD = 'HKD',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  KRW = 'KRW',
  MXN = 'MXN',
  MYR = 'MYR',
  NZD = 'NZD',
  PHP = 'PHP',
  SGD = 'SGD',
  THB = 'THB',
  ZAR = 'ZAR',
  EUR = 'EUR',
}

export interface DailyRate {
  currency: CurrencyEnum
  rate: string
  symbol: string
  name: string
}

export const getRateResolver = async (): Promise<Array<DailyRate>> => {
  const response = await get(dailyUrl())
  const parsedResponse = JSON.parse(response)

  if (parsedResponse['gesmes:Envelope']?.Cube?.Cube?.Cube) {
    return [
      ...parsedResponse['gesmes:Envelope']?.Cube?.Cube?.Cube,
      { currency: CurrencyEnum['EUR'], rate: 1 },
    ].map((obj: DailyRate) => ({
      ...obj,
      symbol: getSymbolFromCurrency(obj.currency),
      name: country.getCurrency(obj.currency)?.name,
    }))
  }

  throw Error()
}
