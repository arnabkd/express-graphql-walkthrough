const SuitsRootQuery = require('./query')
const SuitsRootMutation = require('./mutation')

const {
    GraphQLSchema
} = require('graphql')

const SuitsAppSchema = new GraphQLSchema({
    query: SuitsRootQuery,
    mutation: SuitsRootMutation
})

module.exports = SuitsAppSchema
