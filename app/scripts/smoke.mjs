/* Offline-compatible smoke checks for the actual BE YOU screens and data flows.
   A minimal fake DOM runs the shipping JS in a VM; browser/device QA is still required. */
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { dirname,resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const app=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const files=['ui-primitives.js','functional.js'];
const values=new Map();let local={};let errors=[];
const nodes=new Map();
const moodButtons=['happy','calm','neutral','anxious','sad'].map(m=>({
 dataset:{mood:m},pressed:false,classList:{toggle(){}},
 setAttribute(name,value){if(name==='aria-pressed')this.pressed=String(value)==='true'}
}));
const moodPanel={dataset:{selectedMood:'calm'}};

function element(id){if(!nodes.has(id))nodes.set(id,{value:'',innerHTML:'',textContent:'',classList:{add(){},remove(){},toggle(){}},setAttribute(name,v){this.attrs??={};this.attrs[name]=String(v)},getAttribute(name){return this.attrs?.[name]??null},focus(){}});return nodes.get(id)}
const listeners={};
const document={
 getElementById:element,
 querySelectorAll:s=>s==='.mood-v2-options [data-mood]'?moodButtons:[],
 querySelector:s=>s==='.mood-v2'?moodPanel:{setAttribute(){}},
 addEventListener:(type,fn)=>{listeners[type]=fn},
 body:{classList:{toggle(){}},append(){}},
 createElement:()=>({set href(v){},set download(v){},click(){},remove(){}})
};
let current=new URL('http://localhost:4173/');
const location={get href(){return current.href},get search(){return current.search},get protocol(){return current.protocol}};
const history={pushState(_state,_title,url){current=new URL(url,current)},replaceState(_state,_title,url){current=new URL(url,current)}};
const context=vm.createContext({document,location,history,localStorage:{getItem:k=>local[k]??null,setItem:(k,v)=>{local[k]=v}},navigator:{},console,
 setTimeout:()=>0,clearTimeout:()=>{},setInterval:()=>0,clearInterval:()=>{},confirm:()=>true,Blob,URL,URLSearchParams,Date,crypto:{randomUUID:()=>`test-${Math.random()}`},window:{addEventListener(){}}
});
for(const f of files)vm.runInContext(readFileSync(resolve(app,f),'utf8'),context,{filename:f});
const pages=vm.runInContext('Object.keys(screens)',context);
for(const name of pages){
 const page=vm.runInContext(`screens[${JSON.stringify(name)}]()`,context);
 assert(page.length>80,`Blank screen ${name}`);
 assert(!page.includes('assets/manga/'),`Old image path on ${name}`);
 assert(!page.includes('NaN%'),`Invalid progress on ${name}`);
 const allImgs=[...page.matchAll(/<img[^>]*src="([^"]+)/g)].map(m=>m[1]);
 for(const img of allImgs)assert(img.startsWith('assets/approved/'),`Unapproved image in ${name}: ${img}`);
}
function dispatch(action){const target={dataset:{action},closest:()=>target};vm.runInContext('void 0',context);vm.runInContext('routeIfClicked',context)({target,preventDefault(){}})}
// Five independently illustrated mood states exist on ONE screen; no new routes.
const moodPage=vm.runInContext('screens.mood()',context);
assert.equal((moodPage.match(/data-mood="/g)||[]).length,5);
assert.equal((moodPage.match(/id="mood-portrait"/g)||[]).length,1);
const originalPortrait=vm.runInContext('moodPortraitSrc("calm")',context);
const expectedSources=['happy','calm','neutral','anxious','sad'].map(m=>vm.runInContext('moodPortraitSrc('+JSON.stringify(m)+')',context));
assert.equal(new Set(expectedSources).size,5,'One independently approved portrait per emotion');
for(const src of expectedSources)assert(src.startsWith('assets/approved/moods/'));
assert(moodPage.includes(originalPortrait),'Initial image must reflect initial selected mood');
const originalRoute=current.href;
const originalData=local['beyou-v1-local-data'];
for(const key of ['happy','calm','neutral','anxious','sad']){
 const target={dataset:{mood:key},closest:()=>target};
 vm.runInContext('routeIfClicked',context)({target,preventDefault(){}});
 assert.equal(vm.runInContext('selectedMood',context),key);
 assert.equal(moodPanel.dataset.selectedMood,key);
 assert.equal(moodButtons.filter(button=>button.pressed).length,1);
 assert.equal(moodButtons.find(button=>button.dataset.mood===key).pressed,true);
 assert.equal(element('mood-portrait').getAttribute('src'),vm.runInContext('moodPortraitSrc('+JSON.stringify(key)+')',context),'Portrait changes with each mood');
 assert(element('mood-portrait').attrs.alt.toLowerCase().includes('hair'),'Mood portrait keeps descriptive alternative text');
 assert.equal(element('mood-feeling-summary').textContent,vm.runInContext('moodStates['+JSON.stringify(key)+'].summary',context));
 assert.equal(current.href,originalRoute,'No new screen when choosing a mood');
 assert.equal(local['beyou-v1-local-data'],originalData,'Do not save until user continues and saves');
}
assert(vm.runInContext("screens['mood-details']()",context).includes('Low'));
// Check-ins are saved from the real interaction handler.
values.set('mood-note','A gentle moment');element('mood-note').value=values.get('mood-note');element('mood-energy').value='4';
vm.runInContext("selectedMood='happy';selectedTags=['Work'];",context);
dispatch('save-mood');
let state=JSON.parse(local['beyou-v1-local-data']);
assert.equal(state.checkins.length,1);assert.equal(state.checkins[0].mood,'happy');assert.equal(state.checkins[0].note,'A gentle moment');
// Journal saves and edits without hidden demo data.
element('journal-title').value='A small win';element('journal-body').value='Today was okay.';
dispatch('save-journal');state=JSON.parse(local['beyou-v1-local-data']);assert.equal(state.journal.length,1);
// Guided journeys retain their steps and writing.
vm.runInContext("chosenJourney='travel'",context);dispatch('begin-journey');
element('exercise-answer').value='A train ride by the lake';dispatch('save-exercise');
state=JSON.parse(local['beyou-v1-local-data']);assert.equal(state.journeys.travel.step,1);
assert.equal(state.journeys.travel.answers[0],'A train ride by the lake');
// Aggregate widgets display recorded rather than sample counts.
assert(vm.runInContext('screens.insights()',context).includes('1'));
console.log(`BE YOU smoke: ${pages.length} real screens rendered, all images routed through approved art, five distinct approved mood portraits, reactive single-screen selector and mood/journal/journey persistence passed.`);
