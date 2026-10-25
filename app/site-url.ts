import type{Metadata}from'next';
// Public origin used for canonical links, social previews and the sitemap. Set SITE_URL in the
// hosting environment if the site is served from a different domain.
export const siteUrl=(process.env.SITE_URL||'https://topreklama.net').replace(/\/$/,'');
export const shareImage={url:'/og.jpg',width:1200,height:630,alt:'Reklama ndriçuese e Interex, realizuar nga Top Reklama'};
// A page's openGraph replaces the root one entirely, so every page restates the shared fields.
export function pageMetadata(title:string,description:string,path:string):Metadata{return{title,description,alternates:{canonical:path},openGraph:{type:'website',siteName:'Top Reklama',locale:'sq_AL',title:title+' | Top Reklama',description,url:path,images:[shareImage]},twitter:{card:'summary_large_image'}}}
