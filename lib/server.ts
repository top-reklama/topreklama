import {getDatabase,getBucket} from './platform';
// Visitors are identified by an unguessable HttpOnly cookie. Identity headers from a hosting platform are not
// trusted here: on Vercel nothing strips them, so any client could send them.
export function context(req:Request){const cookie=req.headers.get('cookie')?.match(/(?:^|;\s*)tr_session=([a-f0-9-]{36})(?:;|$)/)?.[1];const id='guest:'+(cookie||crypto.randomUUID());return{ownerId:id,cookie:cookie?undefined:`tr_session=${id.slice(6)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000${isHttps(req)?'; Secure':''}`}}
export function json(data:unknown,status=200,cookie?:string){const headers:Record<string,string>={'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};if(cookie)headers['Set-Cookie']=cookie;return Response.json(data,{status,headers})}
// The public host and scheme as the edge saw them (Vercel sets x-forwarded-*); Next's req.url may name another host.
export function requestHost(req:Request){return req.headers.get('x-forwarded-host')||req.headers.get('host')||new URL(req.url).host}
export function isHttps(req:Request){return (req.headers.get('x-forwarded-proto')||new URL(req.url).protocol.replace(':',''))==='https'}
export function sameOrigin(req:Request){const origin=req.headers.get('origin');if(!origin)return true;try{return new URL(origin).host===requestHost(req)}catch{return false}}
export async function limitedBytes(req:Request,max:number){const reader=req.body?.getReader();if(!reader)return new Uint8Array();const chunks:Uint8Array[]=[];let size=0;while(true){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>max){await reader.cancel();throw new Error('size')}chunks.push(value)}const all=new Uint8Array(size);let offset=0;for(const chunk of chunks){all.set(chunk,offset);offset+=chunk.length}return all}
export async function body(req:Request,max=100_000){if(!sameOrigin(req))throw new Error('origin');return JSON.parse(new TextDecoder().decode(await limitedBytes(req,max)))}
export function bindings(){return{DB:getDatabase(),BUCKET:getBucket()}}
// Client mistakes (bad JSON, foreign origin, oversized body) are answered as such, not as server faults.
export function fail(error:unknown,cookie?:string){if(error instanceof SyntaxError)return json({error:'Kërkesa nuk është e vlefshme.'},400,cookie);if(error instanceof Error&&error.message==='origin')return json({error:'Origin not allowed'},403,cookie);if(error instanceof Error&&error.message==='size')return json({error:'Kërkesa është shumë e madhe.'},413,cookie);console.error('Request failed',error instanceof Error?error.message:'unknown');return json({error:'Kërkesa nuk u përfundua. Ju lutemi provoni përsëri.'},500,cookie)}
export function imageMime(bytes:Uint8Array){if(bytes[0]===137&&bytes[1]===80&&bytes[2]===78&&bytes[3]===71&&bytes[4]===13&&bytes[5]===10)return'image/png';if(bytes[0]===255&&bytes[1]===216&&bytes[2]===255)return'image/jpeg';if(String.fromCharCode(...bytes.slice(0,4))==='RIFF'&&String.fromCharCode(...bytes.slice(8,12))==='WEBP')return'image/webp';return null}
// Guests can shed their cookie to reset per-owner quotas, so guest traffic also shares a site-wide ceiling.
export const guestCaps={uploadBytesPerDay:3*1024*1024*1024,ordersPerHour:120};
// Per-visitor and per-IP request ceilings, counted in rate_events over a sliding window.
// Vercel sets x-real-ip at its edge, so a client cannot choose it there. cf-connecting-ip is only honoured off
// Vercel (local tests and Cloudflare), where it is set by the platform or the test itself.
export const rateLimits={designSave:{owner:[60,3600000],ip:[150,3600000]},upload:{owner:[40,3600000],ip:[100,3600000]},order:{ip:[30,3600000]},adminLogin:{ip:[10,900000]}} as const;
export function clientIp(req:Request){return process.env.VERCEL?req.headers.get('x-real-ip')||req.headers.get('x-forwarded-for')?.split(',')[0].trim()||'unknown':req.headers.get('cf-connecting-ip')||'local'}
type Window=readonly [number,number];
export async function rateLimited(req:Request,ownerId:string,action:keyof typeof rateLimits){const{DB}=bindings();const now=Date.now();const rules=Object.entries(rateLimits[action]) as [string,Window][];try{for(const[scope,[limit,windowMs]]of rules){const key=scope==='ip'?'ip:'+clientIp(req):ownerId;const row=await DB.prepare('SELECT COUNT(*) AS n FROM rate_events WHERE bucket=? AND key=? AND created_at>?').bind(action,key,now-windowMs).first<{n:number}>();if((row?.n||0)>=limit)return true}await DB.batch(rules.map(([scope])=>DB.prepare('INSERT INTO rate_events (id,bucket,key,created_at) VALUES (?,?,?,?)').bind(crypto.randomUUID(),action,scope==='ip'?'ip:'+clientIp(req):ownerId,now)));if(Math.random()<.02)await DB.prepare('DELETE FROM rate_events WHERE created_at<?').bind(now-86400000).run();return false}catch(e){
// A missing migration must not take orders and uploads down with it.
if(e instanceof Error&&e.message.includes('no such table: rate_events')){console.error('Rate limiting unavailable: rate_events table missing');return false}throw e}}
export function tooMany(cookie?:string){return json({error:'Shumë kërkesa. Provoni më vonë.'},429,cookie)}
export async function ownedUploads(ids:string[],ownerId:string){const {DB}=bindings();for(const id of [...new Set(ids)]){const row=await DB.prepare('SELECT id FROM uploads WHERE id = ? AND owner_id = ?').bind(id,ownerId).first();if(!row)return false}return true}
