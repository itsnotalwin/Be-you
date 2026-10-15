/* Offline shell. No analytics and no network calls made for private data. */
const CACHE='be-you-v5-approved-today-04';
const ASSETS=['./','./index.html','./ui-primitives.js','./functional.js','./app.css','./responsive.css','./responsive-nav.js','./manifest.webmanifest',
'./assets/icons/favicon.svg','./assets/icons/icon-192.png','./assets/icons/icon-512.png','./assets/icons/apple-touch-icon.png',
...['volume-01/01-contemplative-koi-and-sakura.webp',
'volume-01/02-koi-and-blossom-reverie.webp',
'volume-01/03-unsent-letter.webp',
'volume-01/04-letting-go.webp',
'volume-02/01-travel-journal.webp',
'volume-02/02-rethinking-loneliness.webp',
'volume-02/03-calm-koi.webp',
'volume-02/04-hopeful-blooms.webp'].map(n=>'./assets/approved/'+n)];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith((async()=>{const cache=await caches.open(CACHE);const match=await cache.match(e.request,{ignoreSearch:true});if(match)return match;try{const response=await fetch(e.request);if(response.ok)cache.put(e.request,response.clone());return response}catch{return e.request.mode==='navigate' ? ((await cache.match('./index.html'))||Response.error()) : Response.error()}})())});
