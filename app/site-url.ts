import type{Metadata}from'next';
// Public origin used for canonical links, social previews and the sitemap. Set SITE_URL in the
// hosting environment if the site is served from a different domain.
export const siteUrl=(process.env.SITE_URL||'https://topreklama.net').replace(/\/$/,'');
// Preview mode until launch: search engines are told not to index anything. Set SITE_INDEXING=on in
// the hosting environment (and redeploy) to go live; anything else keeps the site out of search.
export const indexable=process.env.SITE_INDEXING==='on';
export const shareImage={url:'/og.jpg',width:1200,height:630,alt:'Reklama ndriçuese e Interex, realizuar nga Top Reklama'};
const enPath=(path:string)=>path==='/'?'/en':'/en'+path;
// Each page names itself and its twin in the other language, with Albanian as the default.
export function languageAlternates(path:string,lang:'sq'|'en'='sq'){return{canonical:lang==='en'?enPath(path):path,languages:{sq:path,en:enPath(path),'x-default':path}}}
// A page's openGraph replaces the root one entirely, so every page restates the shared fields.
// `path` is always the Albanian address; English pages pass lang 'en'.
export function pageMetadata(title:string,description:string,path:string,lang:'sq'|'en'='sq'):Metadata{return{title,description,alternates:languageAlternates(path,lang),openGraph:{type:'website',siteName:'Top Reklama',locale:lang==='en'?'en_US':'sq_AL',title:title+' | Top Reklama',description,url:lang==='en'?enPath(path):path,images:[shareImage]},twitter:{card:'summary_large_image'}}}
