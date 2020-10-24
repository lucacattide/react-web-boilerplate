// Next - Configuration
'use strict';

const {parsed: localEnv} = require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const autoprefixer = require('autoprefixer');
const withOffline = require('next-offline');
const webpack = require('webpack');
const nextConfig = {
  /* TODO: Enable for serverless deploy */
  target: 'serverless',
  experimental: {
    css: true
  },
  // CSS
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
    sourceMaps: true,
  },
  postcssLoaderOptions: {
    sourceMap: true,
    ident: 'postcss',
    plugins: () => [
      autoprefixer,
    ],
  },
  sassLoaderOptions: {
    sourceMap: true,
    includePaths: [
      'node_modules/compass-mixins/lib',
      'sass',
    ],
  },
  // PWA
  // TODO: Comment if server is different from Now
  /* transformManifest: manifest => [
    '/'
  ].concat(manifest), */
  // TODO: Comment if server is different from Now
  // TODO: Enable in production
  //generateInDevMode: false,
  // Workbox
  workboxOpts: {
    // TODO: Comment if server is different from Now
    swDest: 'static/service-worker.js',
    navigationPreload: true,
    runtimeCaching: [{
      // CDN Resources
      urlPattern: /.*(?:emailjs|addtoany|disqus|github|googleapis|creativecommons|licensebuttons|gstatic|jquery|cloudflare|googletagmanager|google|google-analytics|doubleclick)\.(?:com|io|org|net)/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'resources',
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    }, {
      // Fonts - CSS
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets',
      },
    }, {
      // Fonts - Webfonts
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        cacheableResponse: {
          statuses: [0, 200],
        },
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        },
      },
    }, {
      // Images
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 60,
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    }, {
      // CSS
      urlPattern: new RegExp('.+\\.css$'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'css',
        expiration: {
          maxEntries: 50,
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    }, {
      // JS
      urlPattern: new RegExp('.+\\.js$'),
      handler: 'NetworkFirst',
      options: {
        networkTimeoutSeconds: 3,
        cacheName: 'js',
        expiration: {
          maxEntries: 50,
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    }, {
      // HTML
      urlPattern: /(.*)\.html/,
      handler: 'NetworkFirst',
      options: {
        networkTimeoutSeconds: 3,
        cacheName: 'html',
        expiration: {
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    }, {
      // HTTPS
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        networkTimeoutSeconds: 15,
        cacheName: 'https-calls',
        expiration: {
          maxEntries: 150,
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    }, {
      urlPattern: ({
        event
      }) => event.request.mode === 'navigate',
      handler: 'NetworkFirst',
    }],
    offlineGoogleAnalytics: true,
    cleanupOutdatedCaches: true,
  },
  // JS
  webpack: (config) => {
    config.module.rules.push({
      // SVG
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }, {
      // Node
      test: /\.node$/,
      use: 'node-loader'
    })
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    config.externals = config.externals || [];

    config.externals.push({
      // jQuery
      jquery: 'jQuery'
    })

    return config
  },
  webPackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }

    return config
  },
  // Environment
  env: {
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    EMAIL_TEMPLATE_COOKIES: process.env.EMAIL_TEMPLATE_COOKIES,
    EMAIL_USER: process.env.EMAIL_USER,
    GTM_AUTH_PROD: process.env.GTM_AUTH_PROD
  }
};
const conf = withSass(withCSS(withImages(withOffline(nextConfig))));

delete conf.exportPathMap

module.exports = conf;
