import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../../site-url';
export const metadata:Metadata=pageMetadata('Digital printing','From floor graphics to large-format print. Crisp graphics, prepared for the place they will be seen.','/sherbimet/shtyp','en');
export default function Page(){return <ServiceDetail slug="shtyp"/>}
