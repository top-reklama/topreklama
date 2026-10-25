import type{Metadata}from'next';import{pageMetadata}from'../site-url';
// English twins of the public pages. They reuse the Albanian page components; the language comes from the /en address.
const home=pageMetadata('Top Reklama','Signage production, digital printing and personalized products. From idea to installation, since 2006.','/','en');
export const metadata:Metadata={...home,title:{absolute:'Top Reklama — Signage, print & personalization',template:'%s | Top Reklama'}};
export default function Layout({children}:{children:React.ReactNode}){return children}
