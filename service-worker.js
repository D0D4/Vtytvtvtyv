self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-app-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/path/to/other/assets',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
