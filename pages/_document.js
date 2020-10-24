// Module Start
// JS imports
import Document, { Head, Main, NextScript } from 'next/document'
import crypto from 'crypto'

const cspHashOf = (text) => {
  const hash = crypto.createHash('sha256');

  hash.update(text);

  return `'sha256-${hash.digest('base64')}'`;
};

/**
 * @description Document - Override
 * @author Luca Cattide
 * @date 2019-02-07
 * @export
 * @class StackBlogDocument
 * @extends {Document}
 */
export default class StackBlogDocument extends Document {
  /**
   * @description Props initialization
   * @author Luca Cattide
   * @date 2019-08-13
   * @static
   * @param {object} ctx Module context
   * @returns
   * @memberof StackBlogDocument
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const origin = ctx.req ? `${ctx.req.headers['x-forwarded-proto']}://${ctx.req.headers.host}` : '';
    const url = ctx.req.url;

    return {
      ...initialProps,
      origin,
      url
    }
  }

  setMetaTags() {
    const metaTag = {
      origin: this.props.origin,
      url: this.props.url,
      absoluteUrl: this.props.origin + this.props.url,
      title: '',
      keywords: '',
      description: ''
    };

    return metaTag;
  }

  /**
   * @description Rendering
   * @author Luca Cattide
   * @date 2019-08-13
   * @returns
   * @memberof StackBlogDocument
   */
  render() {
    const csp = `default-src 'none'; prefetch-src 'self'; script-src 'self' tagmanager.google.com router.infolinks.com resources.infolinks.com static.addtoany.com www.google-analytics.com storage.googleapis.com code.jquery.com cdnjs.cloudflare.com www.google.com www.gstatic.com www.googletagmanager.com 'unsafe-eval' 'unsafe-inline'; style-src 'self' fonts.googleapis.com tagmanager.google.com cdnjs.cloudflare.com 'unsafe-inline'; connect-src 'self' tagmanager.google.com api.emailjs.com tatic.addtoany.com storage.googleapis.com www.google.com www.googletagmanager.com www.google-analytics.com stats.g.doubleclick.net cdnjs.cloudflare.com code.jquery.com localhost localhost:1337; font-src 'self' fonts.googleapis.com fonts.gstatic.com data:; img-src 'self' www.gstatic.com www.google-analytics.com stats.g.doubleclick.net ssl.gstatic.com i.creativecommons.org licensebuttons.net data: localhost localhost:1337; media-src 'self'; frame-src 'self' router.infolinks.com www.google.com; form-action 'self'; manifest-src 'self' ${cspHashOf(NextScript.getInlineScriptSource(this.props))}`;
    const metaTag = this.setMetaTags();

    return (
      <html lang="en-GB" prefix="og: http://ogp.me/ns#">
        {/* Head Start */}
        <Head>
          {/* Meta Tags Start */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv='Content-Security-Policy' content={csp} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content={metaTag.keywords} />
          <meta name="description" content={metaTag.description} />
          <meta name="og:site_name" property="og:site_name" content={metaTag.title} />
          <meta name="og:title" property="og:title" content={metaTag.title} />
          <meta name="og:description" property="og:description" content={metaTag.description} />
          <meta name="og:type" property="og:type" content="website" />
          <meta name="og:url" property="og:url" content={metaTag.absoluteUrl} />
          <meta name="og:image" property="og:image" content={this.props.origin +'/img/'} />
          <meta name="og:locale" property="og:locale" content="en-GB" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={metaTag.title} />
          <meta name="theme-color" content="#43739b" />
          {/* Meta Tags End */}
          {/* Preload Start */}
          <link rel="preload" href="/manifest.json" as="script" crossOrigin="anonymous" />
          <link rel="preload" href="//fonts.googleapis.com/css?family=" as="style" crossOrigin="anonymous" />
          <link rel="preload" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" as="style" crossOrigin="anonymous" />
          <link rel="preload" href="//code.jquery.com/jquery-3.4.1.min.js" as="script" crossOrigin="anonymous" />
          <link rel="preload" href="/js/refresh.js" as="script" crossOrigin="anonymous" />
          <link rel="preconnect" href="//storage.googleapis.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="//cdnjs.cloudflare.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="//i.creativecommons.org" crossOrigin="anonymous" />
          <link rel="preconnect" href="//licensebuttons.net" crossOrigin="anonymous" />
          {/* Preload End */}
          {/* CSS Imports Start */}
          <link rel="stylesheet dns-prefetch" href="//fonts.googleapis.com/css?family=" crossOrigin="anonymous" />
          <link rel="stylesheet dns-prefetch" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" crossOrigin="anonymous" />
          {/* CSS Imports End */}
          <link rel="icon dns-prefetch" type="image/png" href="/img/favicon.png" />
          <link rel="apple-touch-icon dns-prefetch" href="/img/" />
          <link rel="manifest dns-prefetch" href="/manifest.json" />
          {/* JS Imports Start */}
          {/* Google Tag Manager Start */}
          <script dangerouslySetInnerHTML={{ __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','');
          `}} />
          {/* Google Tag Manager End */}
          {/* JS Imports End */}
        </Head>
        {/* Head End */}
        {/* Body Start */}
        <body>
          {/* Google Tag Manager Start */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>
          {/* Google Tag Manager End */}
          {/* Container Start */}
          <Main />
          {/* Container End */}
          {/* JS Imports Start */}
          <script src="//code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossOrigin="anonymous"></script>
          <NextScript />
          <script async defer type="module" src="/static/js/refresh.js" crossOrigin="anonymous"></script>
          {/* JS Imports End */}
          {/* Rich Snippets Start */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "http://schema.org",
              "@graph": [{
                "@type": "Organization",
                "url": "https://",
                "logo": "https:///static/img/",
                "contactPoint": [{
                  "@type": "ContactPoint",
                  "telephone": "+39-",
                  "contactType": "customer support",
                  "areaServed": [
                    "Worldwide"
                  ],
                  "availableLanguage": {
                    "@type": "Language",
                    "name": [
                      "Italian"
                    ]
                  }
                }],
                "name": ""
              }, {
                "@type": "WebSite",
                "name": "",
                "url": "https://"
              }]
            }
          `}} />
          {/* Rich Snippets End */}
        </body>
        {/* Body End */}
      </html>
    )
  }
}
