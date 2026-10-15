/** Dependency-free local preview server. Run: npm start, then open http://localhost:4173 */
import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,extname,sep} from 'node:path';
const root=resolve(fileURLToPath(new URL('.',import.meta.url)));
const port=Number(process.env.PORT)||4173;
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webmanifest':'application/manifest+json','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff':'font/woff'};
createServer(async(req,res)=>{
 try{let route=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(route==='/')route='/index.html';const filename=resolve(root,'.'+route);if(filename!==root&&!filename.startsWith(root+sep)){res.writeHead(403);res.end('Forbidden');return}const fsStat=await stat(filename);if(!fsStat.isFile())throw Error('Not a file');const body=await readFile(filename);res.writeHead(200,{'Content-Type':mime[extname(filename)]||'application/octet-stream','Content-Length':body.length,'X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});res.end(body)}catch{res.writeHead(404);res.end('Not found')}
}).listen(port,'127.0.0.1',()=>console.log(`BE YOU is ready at http://localhost:${port}`));