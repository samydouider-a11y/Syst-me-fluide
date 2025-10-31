self.addEventListener('install', e=>{
  e.waitUntil(caches.open('mp-dark-v1').then(c=>c.addAll([
    './','./index.html','./manifest.json',
    './icons/icon-192x192.png','./icons/icon-512x512.png'
  ])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request)));
});