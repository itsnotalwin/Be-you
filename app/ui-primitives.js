/* BE YOU UI primitives: icons, navigation and approved artwork routing.
   Every actual screen is implemented in functional.js. */
/* Active Volume 03 art. Original IDs and derivatives: assets/approved/volume-03/ASSET-MANIFEST.json. */
const APPROVED_ART = Object.freeze({
  'welcome-be-you': 'volume-03/01-sakura-evening-portrait.webp',
  'welcome-notice': 'volume-03/08-sakura-morning-crop.webp',
  'welcome-grow': 'volume-03/03-soft-reflection.webp',
  'journey-travel': 'volume-03/07-wander-beyond.webp',
  'journey-unsent': 'volume-03/04-unsent-words.webp',
  'journey-loneliness': 'volume-03/02-reflection-at-dusk.webp',
  'journey-letting-go': 'volume-03/09-petals-and-light.webp',
  'journal-quiet': 'volume-03/04-unsent-words.webp',
  'portrait-reflect': 'volume-03/03-soft-reflection.webp',
  'portrait-affirm': 'volume-03/02-reflection-at-dusk.webp',
  'insights-reflection': 'volume-03/08-sakura-morning-crop.webp',
  'exercise-breathe': 'volume-03/05-rest-among-blossoms.webp',
  'you-portrait': 'volume-03/03-soft-reflection.webp',
  'flowers': 'volume-03/09-petals-and-light.webp',
  'journal-writing': 'volume-03/06-writing-on-veranda.webp',
  'journal-entry': 'volume-03/10-evening-letters-detail.webp',
  'hero-main': 'volume-03/01-sakura-evening-portrait.webp',
  'home-bloom': 'volume-03/08-sakura-morning-crop.webp'
});
const artwork = n => `assets/approved/${APPROVED_ART[n] || APPROVED_ART['welcome-be-you']}`;
const SVG={
 home:'<path d="M3 10 12 3l9 7v10H5V10"/><path d="M9 20v-7h6v7"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 3-7 8-7s8 2 8 7"/>',back:'<path d="m15 18-6-6 6-6M9 12h11"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',dots:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',heart:'<path d="M20 8c0 6-8 12-8 12S4 14 4 8a4 4 0 0 1 8-1 4 4 0 0 1 8 1Z"/>',book:'<path d="M4 4h7c2 0 2 2 2 3v14c-2-3-4-3-9-3V4ZM20 4h-7v17c2-3 4-3 7-3V4Z"/>',search:'<circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 6 6"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="m4 12 2-1-1-3 3-3 3 1 1-2 2 2 3-1 3 3-1 3 2 1-2 3 1 3-3 3-3-1-2 2-1-2-3 1-3-3 1-3z"/>',plus:'<path d="M12 4v16M4 12h16"/>',check:'<path d="m4 12 5 5L20 6"/>',close:'<path d="M5 5 19 19M19 5 5 19"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7 4.9 19.1"/>',moon:'<path d="M20 16A9 9 0 0 1 8 4a9 9 0 1 0 12 12Z"/>',download:'<path d="M12 3v13m-5-5 5 5 5-5M5 19h14"/>',bell:'<path d="M5 18h14l-2-3V9a5 5 0 0 0-10 0v6l-2 3Z"/><path d="M10 21h4"/>',pen:'<path d="m4 20 5-.9L20 8l-4-4L5 15l-1 5Z"/>',lock:'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',leaf:'<path d="M20 3c-9 0-16 3-16 12 0 4 3 6 6 5 8 0 10-10 10-17ZM3 21c6-8 10-11 15-14"/>',chart:'<path d="M4 20V9M10 20V4M16 20v-8M22 20V6"/>',share:'<path d="M6 12h12m-6-6 6 6-6 6"/>'};
const ico = (name,sty='') => `<svg viewBox="0 0 24 24" aria-hidden="true" style="${sty}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${SVG[name]||SVG.arrow}</svg>`;
const status=()=>`<div class="status"><span>9:41</span><span class="statusright">▴▴  ◖◖  ▰</span></div>`;
const homeind=()=>`<div class="homeindicator"></div>`;
const nav=(which='today')=>`<nav class="screenfooter" aria-label="Primary navigation">${[['today','home','Today'],['journal','book','Journal'],['heal','leaf','Grow'],['you','user','You']].map(([id,ic,lab])=>`<button type="button" data-screen="${id}" class="${which===id?'active':''}" ${which===id?'aria-current="page"':''}>${ico(ic)}<span>${lab}</span></button>`).join('')}</nav>`;
const headerRow=(text,back='today',right='')=>`<div class="toprow" style="margin-bottom:20px"><button class="iconbtn" data-screen="${back}" aria-label="Back">${ico('back')}</button><span style="font-size:12px">${text}</span>${right||'<div style="width:36px"></div>'}</div>`;
const tile=(img,t,s='journey-detail')=>`<div class="arttile" data-screen="${s}"><div class="art"><img src="${artwork(img)}" alt=""></div><label>${t}</label></div>`;
const button=(text,dest='today',type='primary',extra='')=>`<button class="${type}" data-screen="${dest}" ${extra}>${text}</button>`;
const cap=(t)=>`<div class="eyebrow" style="margin-bottom:12px">${t}</div>`;
const moodFace=(m)=>{
 const faces={happy:'<path d="M6.5 15q5.5 6 11 0"/>',calm:'<path d="M7 16h10"/>',neutral:'<path d="M7 16h10"/>',anxious:'<path d="M8 17q4-5 8 0"/>',sad:'<path d="M7 18q5-5 10 0"/>'};
 return `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 9.5v.5M16 9.5v.5"/>${faces[m]||faces.calm}</svg>`;
};
const moods=()=>`<div style="display:flex;justify-content:space-between;gap:4px;margin:17px 0 23px">${[['happy','Good'],['calm','Calm'],['neutral','Okay'],['anxious','Anxious'],['sad','Low']].map(([k,v],i)=>`<button class="mooditem ${i===1?'sel':''}" data-mood="${k}"><span class="moodface">${moodFace(k)}</span>${v}</button>`).join('')}</div>`;
const heroimg=(art,h=240)=>`<div class="art" style="height:${h}px"><img src="${artwork(art)}" alt="Original editorial manga illustration"></div>`;
const note=(t,d,s)=>`<div class="listrow" data-screen="journal-edit"><img src="${artwork(s)}" alt=""><div class="text"><div class="smallcaps">${d}</div><h3>${t}</h3><div class="excerpt">${t==='A quieter day'?'Today I allowed myself a little space to breathe and just be.':t==='Small wins'?'A handful of quiet achievements worth remembering.':'Some thoughts I wanted to keep close to me.'}</div></div>${ico('arrow','width:13px;height:13px;color:#a9adb0')}</div>`;
const sectitle=(t,sub='')=>`<div style="display:flex;justify-content:space-between;align-items:flex-end;margin:0 0 16px"><div><h2 class="h2">${t}</h2>${sub?`<div class="label" style="margin-top:9px">${sub}</div>`:''}</div></div>`;
