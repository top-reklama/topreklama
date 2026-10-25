import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../../site-url';
export const metadata:Metadata=pageMetadata('3D signage','Dimensional letters and logos, manufactured to complement your space and give your business a distinctive presence.','/sherbimet/3d','en');
export default function Page(){return <ServiceDetail slug="3d"/>}
