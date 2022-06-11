const { ApolloServer} = require('apollo-server')
const resolvers = require('./resolvers')
const { importSchema } = require('graphql-import')
const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers
})

server.listen().then(({ url } )=> {
  console.log(`Server running at ${url}`)
})