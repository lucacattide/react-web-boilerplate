// Module Start
// JS imports
import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import withApolloClient from '../backend/with-apollo-client'
import { ApolloProvider } from 'react-apollo'

/**
 * @description App - Override
 * @author Luca Cattide
 * @date 2019-02-08
 * @export
 * @class MyApp
 * @extends {App}
 */
 class MyApp extends App {
  render () {
    const {Component, pageProps, apolloClient} = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Head>
            <title></title>
          </Head>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

// Module Export
export default withApolloClient(MyApp)
// Module End
