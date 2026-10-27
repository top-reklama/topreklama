import{json}from'./server';
// One administrator, set by ADMIN_EMAIL and ADMIN_PASSWORD. A successful login sets an HttpOnly cookie holding an
// expiry and an HMAC of it under SESSION_SECRET; changing the secret signs every session out.
const COOKIE='tr_admin',WEEK=7*86400;
const enc=new TextEncoder();
export const adminConfigured=()=>!!(process.env.ADMIN_EMAIL&&process.env.ADMIN_PASSWORD&&(process.env.SESSION_SECRET||'').length>=32);
async function sign(value:string){const key=await crypto.subtle.importKey('raw',enc.encode(process.env.SESSION_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign']);return Buffer.from(await crypto.subtle.sign('HMAC',key,enc.encode(value))).toString('base64url')}
// Compares digests, so timing reveals nothing about either value.
export async function sameSecret(a:string,b:string){const[x,y]=await Promise.all([a,b].map(v=>crypto.subtle.digest('SHA-256',enc.encode(v))));const p=new Uint8Array(x),q=new Uint8Array(y);let d=0;for(let i=0;i<p.length;i++)d|=p[i]^q[i];return d===0}
export async function checkPassword(email:string,password:string){return adminConfigured()&&email.trim().toLowerCase()===process.env.ADMIN_EMAIL!.trim().toLowerCase()&&await sameSecret(password,process.env.ADMIN_PASSWORD!)}
export async function sessionCookie(secure:boolean){const exp=Math.floor(Date.now()/1000)+WEEK;return`${COOKIE}=${exp}.${await sign('admin:'+exp)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${WEEK}${secure?'; Secure':''}`}
export const clearedCookie=(secure:boolean)=>`${COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure?'; Secure':''}`;
export async function validSession(cookieHeader:string|null|undefined){if(!adminConfigured())return false;const raw=cookieHeader?.match(new RegExp(`(?:^|;\\s*)${COOKIE}=(\\d+)\\.([A-Za-z0-9_-]+)`));if(!raw)return false;const exp=Number(raw[1]);if(!(exp>Date.now()/1000))return false;return sameSecret(raw[2],await sign('admin:'+exp))}
export async function adminAccess(req:Request){return await validSession(req.headers.get('cookie'))?null:json({error:'Kjo hapësirë është vetëm për administratorin.'},403)}
