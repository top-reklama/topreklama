// Drives every request ceiling until it answers 429. Local only: it writes many rows, then removes
// them again through Wrangler so the other smoke tests are not throttled afterwards.
import assert from 'node:assert/strict';import{readFile}from'node:fs/promises';
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:5190';const started=Date.now();const owners=new Set();let checks=0;
const run=Math.floor(Math.random()*200)+20;let ipCount=0;const freshIp=()=>`198.51.${run}.${++ipCount}`;
const freshOwner=()=>{const id=crypto.randomUUID();owners.add('guest:'+id);return'tr_session='+id};
async function send(path,init,cookie,ip){const r=await fetch(base+path,{...init,headers:{Cookie:cookie,Origin:base,'cf-connecting-ip':ip,...init.headers}});await r.arrayBuffer();return r.status}
const eq=(a,b,m)=>{assert.equal(a,b,m);checks++};
const design={version:1,productId:'tshirt',name:'RATE LIMIT TEST',color:'white',size:'M',quantity:1,sides:{front:[{id:'brand-default',type:'logo',x:.5,y:.3,width:.6,rotation:0}],back:[]},printMethod:'Për verifikim',notes:''};
const saveDesign=(c,ip)=>send('/api/designs',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({design})},c,ip);
const logo=await readFile('public/assets/logo.png');
const upload=(c,ip)=>{const form=new FormData();form.append('file',new File([logo],'rate-test.png',{type:'image/png'}));return send('/api/uploads',{method:'POST',body:form},c,ip)};
const quote=()=>({requestId:crypto.randomUUID(),kind:'quote',productId:'signage',contact:{name:'TEST ONLY',company:'Rate limit test',email:'test@example.com',phone:'+38349000000',message:'AUTOMATED LOCAL TEST',consent:true},previewIds:[],printIds:[],artworkIds:[]});
const order=(c,ip)=>send('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(quote())},c,ip);
// Fills one scope to its limit and checks that the next request is refused.
async function fill(label,action,limit,{ownerEvery=Infinity}={}){const ip=freshIp();let cookie=freshOwner();for(let i=0;i<limit;i++){if(i&&i%ownerEvery===0)cookie=freshOwner();const s=await action(cookie,ip);assert.ok(s===200||s===201,`${label}: request ${i+1} of ${limit} should pass, got ${s}`)}checks++;eq(await action(ownerEvery===Infinity?cookie:freshOwner(),ip),429,`${label}: request ${limit+1} is refused`);return{ip,cookie}}
// Removes the rows this run created, from Turso or the local database file, so other tests are not throttled.
async function cleanup(){const{createClient}=await import('@libsql/client');const db=createClient({url:process.env.TURSO_DATABASE_URL||'file:.data/local.db',authToken:process.env.TURSO_AUTH_TOKEN});const list=[...owners].map(o=>`'${o}'`).join(',');for(const sql of[`DELETE FROM rate_events WHERE created_at>=${started}`,`DELETE FROM production_outbox WHERE order_id IN (SELECT id FROM orders WHERE owner_id IN (${list}))`,`DELETE FROM orders WHERE owner_id IN (${list})`,`DELETE FROM designs WHERE owner_id IN (${list})`,`DELETE FROM uploads WHERE owner_id IN (${list})`])await db.execute(sql)}
try{
  const designOwner=await fill('design saves per visitor',saveDesign,60);
  eq(await saveDesign(freshOwner(),designOwner.ip),201,'another visitor on the same IP can still save');
  eq(await saveDesign(designOwner.cookie,freshIp()),429,'the same visitor stays limited from another IP');
  await fill('design saves per IP',saveDesign,150,{ownerEvery:50});
  const uploadOwner=await fill('uploads per visitor',upload,40);
  eq(await upload(freshOwner(),uploadOwner.ip),201,'another visitor on the same IP can still upload');
  await fill('uploads per IP',upload,100,{ownerEvery:35});
  // Orders per visitor are counted from stored orders, so a fresh IP each time isolates that limit.
  const orderOwner=freshOwner();for(let i=0;i<20;i++)eq(await order(orderOwner,freshIp()),201,`order ${i+1} of 20 from one visitor`);
  eq(await order(orderOwner,freshIp()),429,'order 21 from one visitor is refused');
  await fill('orders per IP',order,30,{ownerEvery:15});
  // Site-wide guest ceiling: stay under every per-visitor and per-IP limit until the shared cap answers.
  let refused=0,ip=freshIp(),cookie=freshOwner();for(let i=0;i<130&&!refused;i++){if(i%25===0)ip=freshIp();if(i%15===0)cookie=freshOwner();const s=await order(cookie,ip);if(s===429)refused=i+1;else eq(s,201,'guest order under all personal limits')}
  assert.ok(refused,'the site-wide guest order ceiling (120/hour) is reached');checks++;
  console.log(JSON.stringify({passed:checks,guestCeilingReachedAfter:refused,scope:'isolated local test data, removed afterwards'},null,2));
}finally{await cleanup()}
