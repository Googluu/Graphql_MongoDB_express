const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3000)
console.log('listening on port 3000')