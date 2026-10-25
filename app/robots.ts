import type{MetadataRoute}from'next';import{siteUrl,indexable}from'./site-url';
// In preview mode crawling stays allowed so search engines can see each page's noindex; no sitemap is offered.
export default function robots():MetadataRoute.Robots{return{rules:{userAgent:'*',allow:'/',disallow:['/admin','/api/','/porosite','/en/porosite']},...(indexable?{sitemap:siteUrl+'/sitemap.xml'}:{})}}
