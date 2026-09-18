const CACHE_NAME = "swasthyasalah-v3";
const URLS = ["/","/index.html","/about.html","/blog.html","/contact.html","/privacy.html","/disclaimer.html","/calculator.html","/chatbot.html","/style.css","/lang.js","/healthdata.js","/manifest.json","/logo.png","/logo-192.png","/logo-512.png","/hero.jpg"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(URLS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {caches.open(CACHE_NAME).then(c=>c.put(e.request,res.clone())); return res;}))));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))));
