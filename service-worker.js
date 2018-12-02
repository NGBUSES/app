const version = "0.1.10";
const cacheName = `bus-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        '/nxy.css'
        '/nxy.png'
        '/nxy.svg'
        '/stops.json'
        '/routes.json'
        '/index.html'
        '/routes.html'
        '/jquery.js'
        `/pwacompat.min.js`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
