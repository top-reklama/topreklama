import type{Metadata}from'next';
// Saved designs and requests are private to the visitor.
export const metadata:Metadata={title:'Designs and requests',robots:{index:false,follow:false},alternates:{canonical:'/en/porosite'}};
export default function Layout({children}:{children:React.ReactNode}){return children}
