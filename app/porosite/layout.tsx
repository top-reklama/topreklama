import type{Metadata}from'next';
// Saved designs and requests are private to the visitor.
export const metadata:Metadata={title:'Dizajnet dhe kërkesat',robots:{index:false,follow:false},alternates:{canonical:'/porosite'}};
export default function Layout({children}:{children:React.ReactNode}){return children}
