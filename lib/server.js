const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const mocks = require('./mocks');

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
