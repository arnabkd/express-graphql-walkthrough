import People from '../db/people'
import Lawsuits from '../db/lawsuits'

import LawsuitType from './types/lawsuittype'
import PersonType from './types/persontype'

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} from'graphql'

const SuitsRootMutation = new GraphQLObjectType({
    name: 'SuitsRootMutation',
    description: '...',
    fields: () => ({
        createFriendship: {
            type: new GraphQLList(PersonType),
            description: 'creates a friendship between two people',
            args: {
                id: { type : new GraphQLNonNull(GraphQLString) },
                friendId: { type : new GraphQLNonNull(GraphQLString) }
            },
            resolve: (rootValue, {id, friendId}) => {
                const first = People.find(p => p.id === id)
                const second = People.find(p => p.id === friendId)
                first.friends.push(second)
                second.friends.push(first)
                return [first, second]
            }
        },
        createPerson: {
            type: PersonType,
            description: 'creates a new person',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                id: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                title: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                university: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (rootValue, {name, id, email, age, university}) => {
                const person = {
                    name: name,
                    id: id,
                    friends: [],
                    email: email,
                    age: age,
                    university: university
                }
                People.push(person)
                return person
            }
        },
        createLawsuit:  {
            type: LawsuitType,
            description: 'creates a new Lawsuit',
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                description: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (rootValue, {id, description}) => {
                const lawsuit = {
                    id: id,
                    description: description,
                    lawyers: []
                }
                Lawsuits.push(lawsuit)
                return lawsuit
            }
        },
        assignLawsuitToLawyer: {
            type: LawsuitType,
            description: 'assigns a lawyer to a lawsuit',
            args: {
                personId: {type: new GraphQLNonNull(GraphQLString)},
                lawsuitId: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (rootValue, {personId, lawsuitId}) => {
                const person = People.find(p => p.id === personId)
                const lawsuit = Lawsuits.find(l => l.id === lawsuitId)

                lawsuit.lawyers.push(person)
                return lawsuit
            }
        }
    })
})

module.exports = SuitsRootMutation
