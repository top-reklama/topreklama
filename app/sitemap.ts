import type{MetadataRoute}from'next';import{siteUrl}from'./site-url';
const routes=['','/produkte','/sherbimet','/sherbimet/ndricuese','/sherbimet/3d','/sherbimet/autografike','/sherbimet/shtyp','/sherbimet/promocionale','/sherbimet/billborde','/projektet','/studio','/klientet','/per-ne','/kontakti','/privatesia'];
// Every page is listed in both languages, each naming its twin.
export default function sitemap():MetadataRoute.Sitemap{return routes.flatMap(path=>{const sq=siteUrl+(path||'/'),en=siteUrl+'/en'+path;const alternates={languages:{sq,en}};const priority=path?(path.split('/').length>2?.6:.8):1;return[{url:sq,changeFrequency:path?'monthly':'weekly',priority,alternates},{url:en,changeFrequency:'monthly',priority:priority*.9,alternates}]})}
