// Module Start
// CSS imports
import '../styles/globals.css';
// JS imports
import { useEffect } from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import withApolloClient from '../backend/with-apollo-client';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import TagManager from 'react-gtm-module';
import Layout from '../components/Layout';

// Types
type TagManagerOptions = {
  gtmId: string;
  auth: string | undefined;
  preview: string;
};
type MyAppProps = AppProps & { apolloClient: ApolloClient<any> };

const tagManagerArgs: TagManagerOptions = {
  gtmId: 'GTM-',
  // TODO: In production must be set to NEXT_PUBLIC_GMT_AUTH_PROD
  auth: process.env.NEXT_PUBLIC_GTM_AUTH_DEV,
  // TODO: In production must be set to 'env-<something>'
  preview: 'env-',
};

/**
 * @description MyApp - Override
 * @author Luca Cattide
 * @date 2020-12-04
 * @param {MyAppProps} { Component, pageProps, apolloClient }
 * @returns
 */
function MyApp({ Component, pageProps, apolloClient }: MyAppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <title></title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

// Module export
/**
 * @description Web Vitals + app metrics
 * @author Luca Cattide
 * @date 2020-12-05
 * @export
 * @param {NextWebVitalsMetric} metric
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
  const { id, name, value }: NextWebVitalsMetric = metric;

  // Assumes the global `dataLayer` array exists, see:
  // https://developers.google.com/tag-manager/devguide
  TagManager.dataLayer({
    dataLayer: {
      event: 'web-vitals',
      event_category: 'Web Vitals',
      event_action: name,
      // Google Analytics metrics must be integers, so the value is rounded.
      // For CLS the value is first multiplied by 1000 for greater precision
      // (note: increase the multiplier for greater precision if needed).
      event_value: Math.round(name === 'CLS' ? value * 1000 : value),
      // The `id` value will be unique to the current page load. When sending
      // multiple values from the same page (e.g. for CLS), Google Analytics can
      // compute a total by grouping on this ID (note: requires `eventLabel` to
      // be a dimension in your report).
      event_label: id,
    },
  });
}
export default withApolloClient(MyApp);
// Module End
