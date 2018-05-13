const People = require('../db/people')
const Lawsuits = require('../db/lawsuits')

const LawsuitType = require('./types/lawsuittype')
const PersonType = require('./types/persontype')

const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql')

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
