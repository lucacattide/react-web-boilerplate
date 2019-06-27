// Next - Configuration
'use strict';

const withSass = require('@zeit/next-sass');
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const {join} = require('path');
const {promisify} = require('util');
const copyFile = promisify(fs.copyFile);
const withOffline = require('next-offline');
const webpack = require('webpack');
const nextConfig = {
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
  // Workbox
  workboxOpts: {
    importsDirectory: './static/js/lib/workbox',
    navigationPreload: true,
    runtimeCaching: [{
      // CDN Resources
      urlPattern: /.*(?:googleapis|gstatic|jquery|cloudflare|googletagmanager|google|google-analytics|doubleclick)\.com/,
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
      // Audio
      urlPattern: /.*\.(?:mp3|ogg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'audio',
        cacheableResponse: {
          statuses: [200],
        },
      },
    }, {
      // Video
      urlPattern: /.*\.(?:mp4|webm)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'audio',
        cacheableResponse: {
          statuses: [200],
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
        cacheName: 'html-sections',
        expiration: {
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    }, {
      // PHP
      urlPattern: /(.*)\.php/,
      handler: 'NetworkFirst',
      options: {
        networkTimeoutSeconds: 3,
        cacheName: 'php-sections',
        expiration: {
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    }, {
      urlPattern: ({event}) => event.request.mode === 'navigate',
      handler: 'NetworkFirst',
    }],
    offlineGoogleAnalytics: true,
    cleanupOutdatedCaches: true,
  },
  // JS
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        // jQuery
        jquery: 'jQuery'
      })
    }

    return config
  },
  // File export
  exportPathMap: async function(defaultPathMap, {dev, dir, outDir}) {
    const sitemap = {
      '/': {page: '/'},
    }

    if (dev) {
      return defaultPathMap
    } else {
      await Promise.all([
        copyFile(join(dir, 'cookies-notify.php'), join(outDir, 'cookies-notify.php')),
        copyFile(join(dir, 'csp_report.php'), join(outDir, 'csp_report.php')),
        copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt')),
        copyFile(join(dir, '.htaccess'), join(outDir, '.htaccess')),
      ])

      return sitemap
    }
  },
};

module.exports = withSass(withOffline(nextConfig));
