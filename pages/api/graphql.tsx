import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../lib/typeDefs';
import mocks from '../../lib/mocks';

const server = new ApolloServer({
  typeDefs: typeDefs,
  mocks,
  mockEntireSchema: false,
  tracing: true,
});

export default server.createHandler({
  path: '/api/graphql',
});
