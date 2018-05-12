const SuitsRootQuery = require('./query')
const {
    GraphQLSchema
} = require('graphql')

const SuitsAppSchema = new GraphQLSchema({
    query: SuitsRootQuery
})

module.exports = SuitsAppSchema
