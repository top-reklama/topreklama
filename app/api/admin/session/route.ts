import{adminAccess,adminConfigured,checkPassword,sessionCookie,clearedCookie}from'@/lib/admin';import{json,body,fail,rateLimited,tooMany,isHttps}from'@/lib/server';
const secure=isHttps;
export async function GET(req:Request){return (await adminAccess(req))||json({admin:true,email:process.env.ADMIN_EMAIL})}
// Ten attempts per IP every 15 minutes; every attempt counts, so guessing is slow either way.
export async function POST(req:Request){try{if(!adminConfigured())return json({error:'Hyrja e administratorit nuk është konfiguruar.'},503);if(await rateLimited(req,'admin-login','adminLogin'))return tooMany();const v=await body(req,2000) as {email?:unknown;password?:unknown};if(typeof v.email!=='string'||typeof v.password!=='string'||!await checkPassword(v.email,v.password))return json({error:'Email-i ose fjalëkalimi nuk është i saktë.'},401);const r=json({admin:true},200);r.headers.set('Set-Cookie',await sessionCookie(secure(req)));return r}catch(e){return fail(e)}}
export async function DELETE(req:Request){const r=json({admin:false},200);r.headers.set('Set-Cookie',clearedCookie(secure(req)));return r}
