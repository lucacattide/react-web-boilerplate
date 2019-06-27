// Module Start
// Apollo Client
// JS imports
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

/**
 * @description Client definition
 * @author Luca Cattide
 * @date 2019-06-27
 * @param {*} initialState
 * @return {object}
 */
function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    ssrMode: !process.browser,
    link: new HttpLink({
      // Server URL (must be absolute) - Es. https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn
      uri: '',
      // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

/**
 * @description Client initialization
 * @author Luca Cattide
 * @date 2019-06-27
 * @export
 * @param {*} initialState
 * @return {object}
 */
export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
// Module End
