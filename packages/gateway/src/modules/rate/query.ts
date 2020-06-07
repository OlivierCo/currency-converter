import { GraphQLList } from 'graphql'
import { getRateResolver, DailyRate } from './resolver'
import { GraphQLDailyRate } from './types'

export const getDailyRate = {
  type: new GraphQLList(GraphQLDailyRate),
  description:
    'getRate is the GraphQL query definition which return a list of exchange rates',
  resolve: async (
    parent: any,
    args: any,
    ctx: any,
  ): Promise<Array<DailyRate>> => getRateResolver(),
}
