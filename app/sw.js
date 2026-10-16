/* Offline shell. No analytics and no network calls made for private data. */
const CACHE_PREFIX='be-you-';
const CACHE='be-you-v9-safe-online-refresh';
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
/* Keep other PWAs' caches on the shared github.io origin intact. */
self.addEventListener('activate',e=>e.waitUntil(Promise.all([
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(CACHE_PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))),
  self.clients.claim()
])));
/* Fetch app shell and code from the network first so a deployed update never
   remains trapped behind yesterday's cached HTML/CSS/JS. Offline still works. */
const NETWORK_FIRST=new Set(['','index.html','app.css','responsive.css','ui-primitives.js','functional.js','responsive-nav.js','manifest.webmanifest']);
const SCOPE_PATH=new URL(self.registration.scope).pathname;
self.addEventListener('fetch',e=>{
  const request=e.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin||!url.pathname.startsWith(SCOPE_PATH))return;
  const path=url.pathname.slice(SCOPE_PATH.length);
  const onlineFirst=request.mode==='navigate'||NETWORK_FIRST.has(path);
  e.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const fallback=async()=>await cache.match(request,{ignoreSearch:true})||
      (request.mode==='navigate'?await cache.match('./index.html'):null);
    if(!onlineFirst){
      const cached=await cache.match(request,{ignoreSearch:true});
      if(cached)return cached;
    }
    let response;
    try{
      response=onlineFirst?await fetch(request,{cache:'no-store'}):await fetch(request);
      if(response.ok){
        try{await cache.put(request,response.clone())}catch{/* Storage quota: continue online. */}
        return response;
      }
    }catch{/* A failed network request falls back to the offline shell. */}
    return await fallback()||response||Response.error();
  })());
});
