import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../site-url';
// Static per service so the metadata is emitted inside <head>, where search engines read canonical and hreflang.
export const metadata:Metadata=pageMetadata('Shtyp digjital','Nga foljet për dysheme te shtypi në formate të mëdha. Grafikë e qartë, e përgatitur për vendin ku do të shihet.','/sherbimet/shtyp');
export default function Page(){return <ServiceDetail slug="shtyp"/>}
