import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../site-url';
// Static per service so the metadata is emitted inside <head>, where search engines read canonical and hreflang.
export const metadata:Metadata=pageMetadata('Reklama ndriçuese','Shkronja me ndriçim dhe kuti ndriçuese që e bëjnë reklamën tuaj të dallueshme edhe pas perëndimit të diellit.','/sherbimet/ndricuese');
export default function Page(){return <ServiceDetail slug="ndricuese"/>}
