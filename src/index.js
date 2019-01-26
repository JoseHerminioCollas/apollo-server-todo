/* eslint no-console: "off" */
const { ApolloServer } = require('apollo-server')
const { gql } = require('apollo-server')
const resolvers = require('./resolver')
const typeDefs = require('./schema')
const populate = require('./populate')

const tds = gql`${typeDefs}`
populate()
const server = new ApolloServer({ typeDefs: tds, resolvers })
server.listen(8080).then(({ url }) => {
  console.log(`🚀  Server ... ready at ${url}`)
})
