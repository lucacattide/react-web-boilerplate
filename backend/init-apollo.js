// Module Start
// Apollo Client
// JS imports
import {
  ApolloClient
} from 'apollo-client';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';
import {
  HttpLink
} from 'apollo-link-http';
import {
  onError
} from 'apollo-link-error';
import {
  ApolloLink
} from 'apollo-link';
import fetch from 'isomorphic-unfetch';
import {
  apiAuthorizationUrl,
  apiBaseUrl,
  apiOptions
} from '../js/utils';

let apolloClient = null;

/**
 * @description Client definition
 * @author Luca Cattide
 * @date 2019-06-27
 * @param {*} initialState
 * @return {object}
 */
function create(initialState) {
  const isBrowser = typeof window !== 'undefined';
  const customFetch = async (uri, options) => {
    const response = await fetch(apiAuthorizationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: apiOptions
    });
    const json = await response.json();

    if (typeof(Storage) !== 'undefined') {
      if (!sessionStorage.getItem('access_token')) {
        sessionStorage.setItem('access_token', json.access_token);
      }
    }

    options.headers.Authorization = `Bearer ${json.access_token}`;

    return fetch(uri, options);
  };
  const httpLink = new HttpLink({
    // Server URL (must be absolute) - Es. https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn
    uri: `${apiBaseUrl}/graphql`,
    // Additional fetch() options like `credentials` or `headers`
    credentials: 'same-origin',
    fetch: customFetch
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    // Disables forceFetch on the server (so queries are only run once)
    ssrMode: !isBrowser,
    link: ApolloLink.from([
      onError(({
        graphQLErrors,
        networkError
      }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({
              message,
              locations,
              path
            }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      httpLink
    ]),
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
  if (typeof window === 'undefined') {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
// Module End
