// Inizio Modulo
// Importazione Librerie
import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'

/**
 * @description App - Override
 * @author Luca Cattide
 * @date 2019-02-08
 * @export
 * @class MyApp
 * @extends {App}
 */
export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Head>
        <title></title>
      </Head>
      <Component {...pageProps} />
    </Container>
  }
}