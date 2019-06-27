// Module Start
// JS imports
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
        {/* Head Start */}
        <Head>
          {/* Meta Tags Start */}
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
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="" />
          <meta name="apple-mobile-web-app-title" content="" />
          <meta name="theme-color" content="#" />
          {/* Meta Tags End */}
          {/* Preload Start */}
          <link rel="preload" href="static/manifest.json" as="script" />
          <link rel="preload" href="//code.jquery.com/jquery-3.4.1.min.js" as="script" />
          <link rel="preload" href="static/js/refresh.js" as="script" />
          <link rel="preload" href="static/js/install.js" as="script" />
          {/* Preload End */}
          <link rel="icon dns-prefetch" type="image/png" href="../favicon.png" />
          {/* TODO: Must be 152x152 px PNG */}
          <link rel="apple-touch-icon dns-prefetch" href="static/img/" />
          <link rel="manifest dns-prefetch" href="static/manifest.json" />
        </Head>
        {/* Head End */}
        {/* Body Start */}
        <body>
          {/* Container Start */}
          <Main />
          {/* Container End */}
          <script src="//code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossOrigin="anonymous"></script>
          <NextScript />
          <script async defer type="module" src="static/js/refresh.js"></script>
          <script async defer src="static/js/install.js"></script>
          {/* Rich Snippets Start */}
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
          {/* Rich Snippets End */}
        </body>
        {/* Body End */}
      </html>
    )
  }
}
