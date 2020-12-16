// Module Start
// JS imports
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import crypto from 'crypto';

type MetaTag = {
  origin: string;
  url: string;
  absoluteUrl: string;
  title: string;
  keywords: string;
  description: string;
};

/**
 * @description Document properties interface
 * @author Luca Cattide
 * @date 2020-12-05
 * @interface MyDocumentProps
 */
interface MyDocumentProps {
  origin: string;
  url: string;
}

/**
 * @description Document - Override
 * @author Luca Cattide
 * @date 2020-12-05
 * @class MyDocument
 * @extends {Document}
 */
class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const origin = ctx.req
      ? `${ctx.req.headers['x-forwarded-proto']}://${ctx.req.headers.host}`
      : '';
    const url = ctx.req?.url;

    return {
      ...initialProps,
      origin,
      url,
    };
  }

  /**
   * @description Meta tags setter
   * @author Luca Cattide
   * @date 2020-12-05
   * @returns
   * @memberof MyDocument
   */
  setMetaTags(): MetaTag {
    const metaTag: MetaTag = {
      origin: this.props.origin,
      url: this.props.url,
      absoluteUrl: this.props.origin + this.props.url,
      title: '',
      keywords: '',
      description: '',
    };

    return metaTag;
  }

  /**
   * @description CSP hash setter
   * @memberof MyDocument
   */
  setCspHashOf(text: string): string {
    const hash = crypto.createHash('sha256');

    hash.update(text);

    return `'sha256-${hash.digest('base64')}'`;
  }

  /**
   * @description Rendering
   * @author Luca Cattide
   * @date 2020-12-05
   * @returns
   * @memberof MyDocument
   */
  render() {
    const csp = `default-src 'none'; prefetch-src 'self'; script-src 'self' tagmanager.google.com router.infolinks.com resources.infolinks.com www.google-analytics.com storage.googleapis.com www.google.com www.gstatic.com www.googletagmanager.com 'unsafe-eval' 'unsafe-inline'; style-src 'self' fonts.googleapis.com tagmanager.google.com 'unsafe-inline'; connect-src 'self' tagmanager.google.com storage.googleapis.com www.google.com www.googletagmanager.com www.google-analytics.com stats.g.doubleclick.net localhost; font-src 'self' fonts.googleapis.com fonts.gstatic.com data:; img-src 'self' www.gstatic.com www.google-analytics.com stats.g.doubleclick.net ssl.gstatic.com i.creativecommons.org licensebuttons.net data: localhost; manifest-src 'self' ${this.setCspHashOf(
      NextScript.getInlineScriptSource(this.props),
    )}`;
    const metaTag = this.setMetaTags();

    return (
      <Html lang="en-GB" prefix="og: http://ogp.me/ns#">
        {/* Head Start */}
        <Head>
          {/* Meta Tags Start */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Content-Security-Policy" content={csp} />
          <meta name="keywords" content={metaTag.keywords} />
          <meta name="description" content={metaTag.description} />
          <meta
            name="og:site_name"
            property="og:site_name"
            content={metaTag.title}
          />
          <meta name="og:title" property="og:title" content={metaTag.title} />
          <meta
            name="og:description"
            property="og:description"
            content={metaTag.description}
          />
          <meta name="og:type" property="og:type" content="website" />
          <meta name="og:url" property="og:url" content={metaTag.absoluteUrl} />
          <meta
            name="og:image"
            property="og:image"
            content={this.props.origin + '/img/'}
          />
          <meta name="og:locale" property="og:locale" content="en-GB" />
          <meta name="application-name" content={metaTag.title} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={metaTag.title} />
          <meta name="msapplication-TileColor" content="#" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#" />
          {/* Meta Tags End */}
          {/* Preload Start */}
          <link
            rel="preload"
            href="/manifest.json"
            as="script"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="//fonts.googleapis.com/css?family="
            as="style"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="//storage.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="//i.creativecommons.org"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="//licensebuttons.net"
            crossOrigin="anonymous"
          />
          {/* Preload End */}
          {/* CSS Imports Start */}
          <link
            rel="stylesheet dns-prefetch"
            href="//fonts.googleapis.com/css?family="
            crossOrigin="anonymous"
          />
          {/* CSS Imports End */}
          {/* Prefetching Start */}
          <link
            rel="icon dns-prefetch"
            type="image/png"
            href="/img/favicon.png"
          />
          <link
            rel="icon dns-prefetch"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon dns-prefetch"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />
          <link rel="apple-touch-icon dns-prefetch" href="/img/" />
          <link rel="manifest dns-prefetch" href="/manifest.json" />
          {/* Prefetching End */}
        </Head>
        {/* Head End */}
        {/* Body Start */}
        <body className="h-full">
          {/* Container Start */}
          <Main />
          {/* Container End */}
          {/* JS Imports Start */}
          <NextScript />
          {/* JS Imports End */}
          {/* Rich Snippets Start */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
            {
              "@context": "http://schema.org",
              "@graph": [{
                "@type": "Organization",
                "url": "https://",
                "logo": "https:///public/img/",
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
                      "English"
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
          `,
            }}
          />
          {/* Rich Snippets End */}
        </body>
        {/* Body End */}
      </Html>
    );
  }
}

// Module export
export default MyDocument;
// Module End
