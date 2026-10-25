import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../site-url';
// Static per service so the metadata is emitted inside <head>, where search engines read canonical and hreflang.
export const metadata:Metadata=pageMetadata('Billborde','Grafikë në format të madh për billborde që e bëjnë reklamën tuaj të dukshme në rrugë dhe hapësira publike.','/sherbimet/billborde');
export default function Page(){return <ServiceDetail slug="billborde"/>}
