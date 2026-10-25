import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../../site-url';
export const metadata:Metadata=pageMetadata('Apparel & promotional','T-shirts, caps, pens and business cards with your design. Customize online or tell us what you need.','/sherbimet/promocionale','en');
export default function Page(){return <ServiceDetail slug="promocionale"/>}
