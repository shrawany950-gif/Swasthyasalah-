const CACHE='swasthya-v5';
const ASSETS=['/','/index.html','/about.html','/blog.html','/calculator.html','/contact.html','/chatbot.html','/privacy.html','/disclaimer.html','/style.css','/lang.js','/healthdata.js','/manifest.json','/logo.png','/logo-192.png','/logo-512.png','/hero.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{let cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));return res;})).catch(()=>caches.match('/index.html')));});
