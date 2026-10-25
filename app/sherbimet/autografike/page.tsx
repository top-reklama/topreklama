import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../site-url';
// Static per service so the metadata is emitted inside <head>, where search engines read canonical and hreflang.
export const metadata:Metadata=pageMetadata('Autografikë','Mbështjellje të plota ose pjesore për vetura, kombi dhe flota. E kthejmë automjetin tuaj në një reklamë të dallueshme.','/sherbimet/autografike');
export default function Page(){return <ServiceDetail slug="autografike"/>}
