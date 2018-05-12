const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString
} = require('graphql')

const LawsuitType = new GraphQLObjectType({
    name: 'Lawsuit',
    description: 'A lawsuit type',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = LawsuitType
