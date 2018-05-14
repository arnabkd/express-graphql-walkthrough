import SuitsRootQuery from './query'
import SuitsRootMutation from './mutation'

import {
    GraphQLSchema
} from 'graphql' 

const SuitsAppSchema = new GraphQLSchema({
    query: SuitsRootQuery,
    mutation: SuitsRootMutation
})

module.exports = SuitsAppSchema
