import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList
} from 'graphql'
import PersonType from './persontype'

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
