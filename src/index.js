const { ApolloServer} = require('apollo-server');
const resolvers = require('./resolvers')
const typeDefs = require('./book-schema')

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
