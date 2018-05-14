import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'A person type',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        friends: {type: new GraphQLList(PersonType)},
        age: {type: new GraphQLNonNull(GraphQLInt)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        university: {type: new GraphQLNonNull(GraphQLString)},
        address: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = PersonType
