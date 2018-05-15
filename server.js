import express from 'express'
import graphqlHTTP from 'express-graphql'
import SuitsAppSchema from './src/schema'
import cors from 'cors'

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: SuitsAppSchema,
    graphiql: true
}))

app.listen(4000)
