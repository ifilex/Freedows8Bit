// This is the "Offline copy of assets" service worker

const CACHE = "pwabuilder-offline";
const CACHE_VERSION = "v1.0.0";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  console.log('🔄 Service Worker installing...');
  
  const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    'progman.html'
  ];
  
  event.waitUntil(
    caches.open(CACHE + CACHE_VERSION)
      .then((cache) => {
        console.log('📦 Caching essential assets...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Service Worker installed and cache populated');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker activated');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE + CACHE_VERSION) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Claiming clients...');
      return self.clients.claim();
    })
  );
});

// Message event for skip waiting
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage(CACHE_VERSION);
  }
});

// Fetch event - serve from cache, fallback to network
workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE + CACHE_VERSION,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

