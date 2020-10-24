// Module Start
// JS imports
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import withApolloClient from '../backend/with-apollo-client'
import {ApolloProvider} from '@apollo/react-hooks'
import {loadReCaptcha} from 'react-recaptcha-google'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-',
  // TODO: In production must be set to GMT_AUTH_PROD
  auth: process.env.GTM_AUTH_DEV,
  // TODO: In production must be set to 'env-'
  preview: 'env-'
};

/**
 * @description App - Override
 * @author Luca Cattide
 * @date 2019-02-08
 * @export
 * @class Stack
 * @extends {App}
 */
 class Stack extends App {
  /**
   * @description Props initialization
   * @author Luca Cattide
   * @date 2019-11-15
   * @static
   * @param {object} {Component, ctx} Module component and content
   * @returns
   * @memberof Stack
   */
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};
    let url = '';

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      url = ctx.req.url;
    }

    return {
      pageProps,
      url
    }
  }

  /**
   * @description Component mounting cycle
   * @author Luca Cattide
   * @date 2019-08-09
   * @memberof Stack
   */
  componentDidMount() {
    loadReCaptcha();

    TagManager.initialize(tagManagerArgs);
  }

  /**
   * @description Rendering
   * @author Luca Cattide
   * @date 2019-08-09
   * @returns
   * @memberof Stack
   */
  render () {
    const {Component, pageProps, apolloClient} = this.props

    return (
      <>
        <ApolloProvider client={apolloClient}>
        <Head>
          <title></title>
        </Head>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    )
  }
}

// Module Export
export default withApolloClient(Stack)
// Module End
