import People from '../db/people'
import Lawsuits from '../db/lawsuits'

import LawsuitType from './types/lawsuittype'
import PersonType from './types/persontype'

import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql'

const SuitsRootQuery = new GraphQLObjectType({
    name: 'SuitsRootQuery',
    description: '...',
    fields: () => ({
        allPeople: {
            type: new GraphQLList(PersonType),
            description: 'List of all People',
            resolve: () => {
                return People
            }
        },
        allLawsuits: {
            type: new GraphQLList(LawsuitType),
            description: 'List of all lawsuits',
            resolve: () => {
                return Lawsuits
            }
        },
        lawsuitByLawyerId: {
            args: {
                lawyerId: { type : new GraphQLNonNull(GraphQLString) }
            },
            type: new GraphQLList(LawsuitType),
            description: 'List of all lawsuits that a lawyer is assigned to',
            resolve: (rootValue, {lawyerId}) => {
                return Lawsuits.filter((lawsuit) => {
                    return lawsuit.lawyers.filter(lawyer => lawyer.id === lawyerId).length > 0
                })
            }
        },
        personById: {
            type: PersonType,
            description: 'Gets a person by id',
            args: {
                id: { type : new GraphQLNonNull(GraphQLString) }
            },
            resolve: (rootValue, {id}) => {
                return People.find(p => p.id === id)
            }
        }
    })
})

module.exports = SuitsRootQuery
