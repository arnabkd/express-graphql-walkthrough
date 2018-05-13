const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList
} = require('graphql')
const PersonType = require('./persontype')

const LawsuitType = new GraphQLObjectType({
    name: 'Lawsuit',
    description: 'A lawsuit type',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        lawyers: {type: new GraphQLList(PersonType)}
    })
})

module.exports = LawsuitType
