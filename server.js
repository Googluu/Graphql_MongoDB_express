const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')
const connectDB = require('./db/index')
const { authenticate } = require('./middlewares/auth')

const { config } = require('./config/config')

connectDB(config.dbUrl)


const app = express()

app.use(authenticate)

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(config.port)
console.log('listening on port 3000')