import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../../site-url';
export const metadata:Metadata=pageMetadata('Billboards','Large-format graphics for billboards that make your advertising visible on roads and in public spaces.','/sherbimet/billborde','en');
export default function Page(){return <ServiceDetail slug="billborde"/>}
