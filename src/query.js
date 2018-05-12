const People = require('../db/people')
const Lawsuits = require('../db/lawsuits')

const LawsuitType = require('./types/lawsuittype')
const PersonType = require('./types/persontype')

const {
    GraphQLList,
    GraphQLObjectType,
} = require('graphql')

const SuitsRootQuery = new GraphQLObjectType({
    name: 'SuitsRootQuery',
    description: '...',
    fields: () => ({
        allPeople: {
            type: new GraphQLList(PersonType),
            description: 'List of all People',
            resolve: function() {
                return People
            }
        },
        allLawsuits: {
            type: new GraphQLList(LawsuitType),
            description: 'List of all lawsuits',
            resolve: function() {
                return Lawsuits
            }
        }
    })
})

module.exports = SuitsRootQuery
