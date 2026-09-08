const CACHE='swasthyasalah-v3';
const ASSETS=['/','/index.html','/about.html','/blog.html','/contact.html','/privacy.html','/disclaimer.html','/calculator.html','/chatbot.html','/style.css','/lang.js','/healthData.js','/logo.png','/logo-192.png','/logo-512.png','/hero.jpg','/hero.png','/manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
