// Inizio Modulo
// Importazione Librerie
import Document, { Head, Main, NextScript } from 'next/document'

/**
 * @description Document - Override
 * @author Luca Cattide
 * @date 2019-02-07
 * @export
 * @class MyDocument
 * @extends {Document}
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <html lang="" prefix="og: http://ogp.me/ns#">
        {/* Inizio Head */}
        <Head>
          {/* Inizio Meta Tags */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="og:url" property="og:url" content="" />
          <meta name="og:type" property="og:type" content="" />
          <meta name="og:title" property="og:title" content="" />
          <meta name="og:description" property="og:description" content="" />
          <meta name="og:image" property="og:image" content="" />
          <meta name="og:audio" property="og:audio" content="" />
          <meta name="og:video" property="og:video" content="" />
          <meta name="og:locale" property="og:locale" content="it_IT" />
          <meta name="og:locale:alternate" property="og:locale:alternate" content="" />
          <meta name="og:site_name" property="og:site_name" content="" />
          {/* Fine Meta Tags */}
          {/* Inizio Preload */}
          <link rel="preload" href="//code.jquery.com/jquery-3.3.1.min.js" as="script"></link>
          {/* Fine Preload */}
          <link rel="icon dns-prefetch" type="image/png" href="../favicon.png"></link>
        </Head>
        {/* Fine Head */}
        {/* Inizio Body */}
        <body>
          {/* Inizio Container */}
          <Main />
          {/* Fine Container */}
          <script src="//code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossOrigin="anonymous"></script>
          <NextScript />
          {/* Inizio Rich Snippets */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "url": "http://",
              "logo": "http:///themes/stack/img/logo.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+39-",
                "contactType": "customer support",
                "areaServed": [
                  "IT"
                ],
                "availableLanguage": {
                  "@type": "Language",
                  "name": ["Italian"]
                }
              }],
              "name": ""
            }, {
              "@context": "http://schema.org",
              "@type": "",
              "name": "",
              "url": "http://",
              "image": "http:///themes/stack/img/logo.png",
              "@id": "http://",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "",
                "addressRegion": "",
                "postalCode": "",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": ,
                "longitude":
              },
              "telephone": "+39-"
            }, {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "",
              "url": "http://"
            }
          `}} />
          {/* Fine Rich Snippets */}
        </body>
        {/* Fine Body */}
      </html>
    )
  }
}