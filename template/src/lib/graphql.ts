import { API_URL } from '@env'
import { GraphQLClient } from 'graphql-request'

const graphqlUrl = API_URL ?? ''

export const graphqlClient = () => new GraphQLClient(graphqlUrl)
