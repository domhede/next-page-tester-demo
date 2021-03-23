import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'cross-fetch/polyfill';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
