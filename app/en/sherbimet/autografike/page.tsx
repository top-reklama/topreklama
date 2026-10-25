import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../../site-url';
export const metadata:Metadata=pageMetadata('Vehicle graphics','Full or partial wraps for cars, vans and fleets. We turn your vehicle into distinctive advertising.','/sherbimet/autografike','en');
export default function Page(){return <ServiceDetail slug="autografike"/>}
