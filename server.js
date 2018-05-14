const express = require('express')
const graphqlHTTP = require('express-graphql')
import SuitsAppSchema from './src/schema'

const app = express()
app.use('/graphql', graphqlHTTP({
    schema: SuitsAppSchema,
    graphiql: true
}))

app.listen(4000)
