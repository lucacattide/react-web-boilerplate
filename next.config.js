// Module Start
// JS imports
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
    // TODO: Decomment in production
    // disable: process.env.NODE_ENV === 'development',
  },
};

// Module export
module.exports = withPWA(nextConfig);
// Module End
