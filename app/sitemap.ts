import type{MetadataRoute}from'next';import{siteUrl}from'./site-url';
const routes=['','/produkte','/sherbimet','/sherbimet/ndricuese','/sherbimet/3d','/sherbimet/autografike','/sherbimet/shtyp','/sherbimet/promocionale','/sherbimet/billborde','/projektet','/studio','/klientet','/per-ne','/kontakti'];
export default function sitemap():MetadataRoute.Sitemap{return routes.map(path=>({url:siteUrl+path,changeFrequency:path?'monthly':'weekly',priority:path?(path.split('/').length>2?.6:.8):1}))}
