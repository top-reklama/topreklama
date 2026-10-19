import{env}from'cloudflare:workers';import{json}from'./server';
export function isAdminIdentity(id:string|null,email:string|null){const allowed=(env as unknown as Record<string,string>).ADMIN_EMAIL;return !!(allowed&&id&&email&&allowed.trim().toLowerCase()===email.trim().toLowerCase())}
export function adminAccess(req:Request){return isAdminIdentity(req.headers.get('oai-authenticated-user-id'),req.headers.get('oai-authenticated-user-email'))?null:json({error:'Kjo hapësirë është vetëm për administratorin.'},403)}
