// Module Start
// JS imports
import { setCacheNameDetails } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst,
} from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import * as googleAnalytics from 'workbox-google-analytics';

// Service Worker - Custom Configuration
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', (e) => {
  /* eslint-disable-next-line no-restricted-globals */
  e.waitUntil(self.skipWaiting());

  // Cache names
  setCacheNameDetails({
    prefix: 'app',
    googleAnalytics: 'ga',
  });
  // Files precaching
  // eslint-disable-next-line no-restricted-globals, no-param-reassign, no-underscore-dangle
  precacheAndRoute(self.__WB_MANIFEST || []);
  // Route Requests
  // app-shell
  registerRoute('/', new NetworkFirst());
  // CDN Resources
  registerRoute(
    /.*(?:googleapis|creativecommons|licensebuttons|gstatic|googletagmanager|google|google-analytics|doubleclick)\.(?:com|io|org|net)/,
    new StaleWhileRevalidate({
      cacheName: 'app-resources',
    }),
  );
  // Fonts - CSS
  registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new StaleWhileRevalidate({
      cacheName: 'app-google-fonts-stylesheets',
    }),
  );
  // Fonts - Webfonts
  registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new CacheFirst({
      cacheName: 'app-google-fonts-webfonts',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    }),
  );
  // Images
  registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new CacheFirst({
      cacheName: 'app-images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
  );
  // CSS
  registerRoute(
    new RegExp('.+\\.css$'),
    new CacheFirst({
      cacheName: 'app-css',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 50,
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
  );
  // JS
  registerRoute(
    new RegExp('.+\\.js$'),
    new NetworkFirst({
      networkTimeoutSeconds: 3,
      cacheName: 'app-js',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 50,
          // 1 month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
  );

  // Google Analytics
  googleAnalytics.initialize();
});
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', (e) => {
  const cacheWhiteList = [
    'app-resources',
    'app-google-fonts-stylesheets',
    'app-google-fonts-webfonts',
    'app-images',
    'app-css',
    'app-js',
  ];

  // Old cache deletion
  e.waitUntil(
    caches
      .keys()
      .then((keyList) => {
        return Promise.all(
          /* eslint-disable-next-line array-callback-return, consistent-return */
          keyList.map((key) => {
            if (cacheWhiteList.indexOf(key) === -1) {
              return caches.delete(key);
            }
          }),
        );
      })
      .then(() => {
        /* eslint-disable-next-line no-restricted-globals */
        self.clients.claim();
      }),
  );
});
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }
      if (
        e.request.cache === 'only-if-cached' &&
        e.request.mode !== 'same-origin'
      ) {
        /* eslint-disable-next-line consistent-return */
        return;
      }

      return fetch(e.request).then((res) => {
        if (!res || res.status !== 200 || res.type !== 'basic') {
          return res;
        }

        const responseToCache = res.clone();

        caches.keys().then((keyList) => {
          keyList.forEach((key) => {
            caches.open(key).then((cache) => {
              cache.put(e.request, responseToCache);
            });
          });
        });

        return res;
      });
    }),
  );
});
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    /* eslint-disable-next-line no-restricted-globals */
    self.skipWaiting();
  }
});
// Module End
