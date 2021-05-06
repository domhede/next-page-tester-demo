import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'cross-fetch/polyfill';

export const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
});
