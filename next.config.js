// Module Start
// JS imports
const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// Change start-url cache strategy to prompt user to reload on new version
runtimeCaching[0].handler = 'StaleWhileRevalidate';

// Next - Configuration
const nextConfig = {
  // Caching
  images: {
    // External image domains
    domains: [],
  },
  // PWA
  pwa: {
    dest: 'public',
    sw: 'service-worker.js',
    // TODO: Decomment in production
    disable: process.env.NODE_ENV === 'development',
    register: false,
    skipWaiting: false,
    navigationPreload: true,
    offlineGoogleAnalytics: true,
    cleanupOutdatedCaches: true,
    runtimeCaching: [
      ...runtimeCaching,
      {
        // CDN Resources
        urlPattern: /.*(?:googleapis|creativecommons|licensebuttons|gstatic|googletagmanager|google|google-analytics|doubleclick)\.(?:com|io|org|net)/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'resources',
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

// Module export
module.exports = withPWA(nextConfig);
// Module End
