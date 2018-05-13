const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList
} = require('graphql')

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'A person type',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        friends: {type: new GraphQLList(PersonType)}
    })
})

module.exports = PersonType
