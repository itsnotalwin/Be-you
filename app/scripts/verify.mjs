import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failures = [];
const read = f => readFileSync(path.join(root, f),'utf8');
const requireFile = f => { if (!existsSync(path.join(root,f))) failures.push(`Missing ${f}`); };
for (const f of ['index.html','styles.css','app.css','ui-primitives.js','functional.js','sw.js','manifest.webmanifest','server.mjs']) requireFile(f);
const html = read('index.html');
for(const f of ['styles.css','app.css','ui-primitives.js','functional.js','manifest.webmanifest']) if(!html.includes(f)) failures.push(`index.html missing ${f}`);
const config=read('ui-primitives.js');
const approved=[...config.matchAll(/'([\w-]+)'\s*:\s*'(volume-\d+\/[^']+\.webp)'/g)];
if(approved.length<8) failures.push('Art role map has fewer than eight approved routes');
for (const [,name,rel] of approved) requireFile('assets/approved/'+rel);
for (const file of [...new Set(approved.map(x=>'assets/approved/'+x[2]))]) {
  const p=path.join(root,file);
  if(existsSync(p)){const magic=readFileSync(p).subarray(0,12);if(magic.toString('ascii',0,4)!=='RIFF'||magic.toString('ascii',8,12)!=='WEBP')failures.push('Invalid WebP: '+file)}
}
for(const f of ['assets/manga/city-night.webp','assets/manga/cat-window.webp']) requireFile(f);
const manifest=JSON.parse(read('manifest.webmanifest'));
if(!Array.isArray(manifest.icons)||manifest.icons.length<2) failures.push('PWA icon manifest is incomplete');
for(const icon of manifest.icons??[]) requireFile(icon.src);
const sw=read('sw.js');
for(const [,name,rel] of approved)if(!sw.includes(rel)) failures.push('Service worker does not precache art for '+name);
for(const f of ['city-night','cat-window'])if(!sw.includes(f))failures.push('Service worker missing fallback artwork '+f);
for(const f of ['index.html','functional.js','app.css'])if(!sw.includes(f))failures.push('Service worker missing core asset '+f);
for(const f of ['screenshots/PHASE_01_CONTACT_SHEET.jpg','docs/PHASE_01_ART_INTEGRATION.md']) requireFile(f);
if(failures.length){console.error('BE YOU verification failed:\n'+failures.map(x=>' - '+x).join('\n'));process.exit(1)}
console.log(`BE YOU verified: ${approved.length} approved art roles, ${new Set(approved.map(x=>x[2])).size} unique illustrations, PWA files and manifest present.`);