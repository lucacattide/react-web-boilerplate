// Module Start
// JS imports
import { StaleWhileRevalidate } from 'workbox-strategies';
import { setDefaultHandler, setCatchHandler } from 'workbox-routing';
import { matchPrecache } from 'workbox-precaching';

// Service Worker - Custom Configuration
// Use a stale-while-revalidate strategy for all other requests.
setDefaultHandler(new StaleWhileRevalidate());
// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
setCatchHandler(({ e }) => {
  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  // Otherwise return as caches.match(FALLBACK_URL)
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (e.request.destination) {
    case 'document':
      return matchPrecache('/offline');

    default:
      return Response.error();
  }
});
// Module End
