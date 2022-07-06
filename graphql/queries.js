const { GraphQLString } = require('graphql')

const hello = {
    type: GraphQLString,
    description: "Return string",
    resolve: () => "Hello, world"
}

module.exports = {hello}