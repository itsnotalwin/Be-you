/* BE YOU: verify the one real app, approved artwork and offline shell. */
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const error=[];
const has=f=>existsSync(path.join(root,f));
const read=f=>readFileSync(path.join(root,f),'utf8');
const required=['index.html','app.css','responsive.css','responsive-nav.js','ui-primitives.js','functional.js','sw.js','manifest.webmanifest','server.mjs','package.json','assets/icons/favicon.svg','assets/brand/wordmark.svg'];
for(const f of required)if(!has(f))error.push(`Missing ${f}`);
const html=read('index.html');
for(const f of ['app.css','responsive.css','responsive-nav.js','ui-primitives.js','functional.js','manifest.webmanifest'])if(!html.includes(f))error.push(`index.html does not load ${f}`);
if(html.includes('styles.css')||html.includes('refinement.css'))error.push('Stale CSS references remain');
const shared=read('ui-primitives.js'), code=read('functional.js');
if(/const screens\s*=/.test(shared))error.push('Duplicate static screen registry found in UI primitives');
if(!/const screens\s*=/.test(code))error.push('Working screen registry missing');
const destinations=['welcome','onboard-notice','onboard-grow','today','home','mood','journal','journal-edit','heal','journey-detail','exercise','affirmations','breathe','insights','you','settings','offline','install'];
for(const page of destinations){const expression=page.includes('-')?`screens['${page}']`:`screens.${page}`;
if(!code.includes(expression)&&!code.includes(`${page}:()=>`)&&!code.includes(`'${page}':()=>`))error.push(`Missing functional destination: ${page}`)}
const config=shared;
const approved=[...config.matchAll(/'([\w-]+)'\s*:\s*'(volume-\d+\/[^']+\.webp)'/g)];
const assets=[...new Set(approved.map(x=>'assets/approved/'+x[2]))];
if(assets.length!==8)error.push(`Expected 8 approved images, found ${assets.length}`);
for(const file of assets){if(!has(file)){error.push(`Missing artwork ${file}`);continue;}const b=readFileSync(path.join(root,file));if(b.toString('ascii',0,4)!=='RIFF'||b.toString('ascii',8,12)!=='WEBP')error.push(`Invalid artwork: ${file}`)}
const manifest=JSON.parse(read('manifest.webmanifest'));
if(!Array.isArray(manifest.icons)||manifest.icons.length<2)error.push('PWA icons incomplete');
for(const icon of manifest.icons??[])if(!has(icon.src))error.push('Missing PWA icon '+icon.src);
const sw=read('sw.js');
for(const file of ['index.html','functional.js','ui-primitives.js','responsive-nav.js','responsive.css','app.css',...assets])if(!sw.includes(file.replace(/^assets\/approved\//,''))&&!sw.includes(file))error.push(`Offline cache missing ${file}`);
for(const f of ['styles.css','refinement.css','assets/manga/city-night.webp','assets/manga/cat-window.webp'])if(has(f))error.push(`Unused legacy duplicate file: ${f}`);
for(const f of ['assets/brand/flower-line.png','assets/brand/koi-botanical.png','screenshots/refined/today.webp','screenshots/refined/mood.webp','screenshots/refined/journal.webp'])if(!has(f))error.push(`Missing brand / review asset: ${f}`);
if(!html.includes('desktop-sidebar')||!read('responsive.css').includes('min-width:1024px'))error.push('Desktop workspace missing');
if(error.length){console.error('BE YOU verification FAILED:\n - '+error.join('\n - '));process.exit(1)}
console.log(`BE YOU unified app verified: ${destinations.length} real screens, ${approved.length} artwork roles / ${assets.length} approved images, responsive desktop/mobile layout, PWA offline shell.`);