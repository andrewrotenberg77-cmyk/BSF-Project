const cacheName = 'intranet-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css', // remplace par tes noms de fichiers
  '/script.js'
];

// Installation du Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Intercepter les requêtes pour servir le contenu du cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});