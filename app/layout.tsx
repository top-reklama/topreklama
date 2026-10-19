import type{Metadata}from'next';import'./globals.css';import{SiteShell}from'@/components/site-shell';
export const metadata:Metadata={title:{default:'Top Reklama — Reklama, shtyp & personalizim',template:'%s | Top Reklama'},description:'Prodhim reklamash, shtyp digjital dhe produkte të personalizuara. Nga ideja te montimi, që nga viti 2006.',icons:{icon:'/assets/symbol.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="sq"><body><SiteShell>{children}</SiteShell></body></html>}
