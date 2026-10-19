import{adminAccess}from'@/lib/admin';import{json}from'@/lib/server';
export async function GET(req:Request){return adminAccess(req)||json({admin:true,email:req.headers.get('oai-authenticated-user-email')})}
