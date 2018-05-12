const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString
} = require('graphql')

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'A person type',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = PersonType
