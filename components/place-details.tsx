'use client';
import{useLanguage}from'./site-shell';import{places,tel}from'@/lib/locations';
// A city's factory address (Prishtinë, Pejë) or, elsewhere, the numbers that serve it.
export function PlaceDetails({city}:{city:string}){const{t}=useLanguage();const p=places[city];if(!p)return null;return <span className="place-details"><span className="place-kind">{p.factory?t('Fabrika & zyra','Factory & office'):t('Na kontaktoni në telefon','Reach us by phone')}</span>{p.factory&&<span className="place-address">{t(p.factory.address,p.factory.addressEn)}</span>}<span className="place-phones">{p.phones.map(n=><a key={n} href={tel(n)}>{n}</a>)}</span></span>}
