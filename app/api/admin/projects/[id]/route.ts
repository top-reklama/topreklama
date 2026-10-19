import{adminAccess}from'@/lib/admin';import{saveProject}from'@/lib/portfolio-server';
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){const d=adminAccess(req);if(d)return d;return saveProject(req,(await params).id)}
