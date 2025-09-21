self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('replanteig-v1').then(cache => cache.addAll([
      'index.html',
      'triangle.html',
      'pendent.html',
      'cotes.html',
      'rasants.html',
      'about.html',
      'manifest.json',
      'icon-192.png',
      'icon-512.png',
      'triangle.jpg'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
