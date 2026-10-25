import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../site-url';
// Static per service so the metadata is emitted inside <head>, where search engines read canonical and hreflang.
export const metadata:Metadata=pageMetadata('Tekstil & promocionale','Bluza, kapela, stilolapsa dhe kartëvizita me dizajnin tuaj. Personalizoni online ose na tregoni çfarë ju nevojitet.','/sherbimet/promocionale');
export default function Page(){return <ServiceDetail slug="promocionale"/>}
