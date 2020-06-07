import { GraphQLObjectType } from 'graphql'
import { getDailyRate } from '../modules/rate/query'

export const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query schema definition',
  fields: {
    getDailyRate,
  },
})
