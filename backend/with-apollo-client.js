// Module Start
// Apollo Client Helper
// For implementation see: http://tinyurl.com/yxwzo2qj
// JS imports
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { getDataFromTree } from '@apollo/react-ssr';
import initApollo from './init-apollo';

// Apollo Client HOC
export default (App) => {
  class Apollo extends React.Component {
    static displayName = 'withApollo(MyApp)';

    static async getInitialProps(ctx) {
      const { Component, router, AppTree } = ctx;
      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree and extract the resulting data
      const apollo = initApollo();

      if (typeof window === 'undefined') {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <AppTree
              // eslint-disable-next-line
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />,
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    /**
     * Creates an instance of Apollo.
     * @author Luca Cattide
     * @date 2019-06-27
     * @param {*} props Properties
     */
    constructor(props) {
      super(props);

      this.apolloClient = initApollo(props.apolloState);
    }

    /**
     * @description Component rendering
     * @author Luca Cattide
     * @date 2019-06-27
     * @returns
     */
    render() {
      // eslint-disable-next-line
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  }

  // Properties validation
  Apollo.propTypes = {
    apolloState: PropTypes.func.isRequired,
  };

  return Apollo;
};
