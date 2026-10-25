import ServiceDetail from'@/components/service-detail';import type{Metadata}from'next';import{pageMetadata}from'../../site-url';
// Static per service so the metadata is emitted inside <head>, where search engines read canonical and hreflang.
export const metadata:Metadata=pageMetadata('Reklama 3D','Shkronja dhe logo me dimension, të prodhuara për të plotësuar hapësirën dhe për të dalluar biznesin tuaj.','/sherbimet/3d');
export default function Page(){return <ServiceDetail slug="3d"/>}
