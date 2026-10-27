'use client';
import Link from'@/components/site-link';import{useLanguage}from'./site-shell';import{faq,testimonials,serviceFacts}from'@/lib/site-content';

// Renders only once real client quotes are added to lib/site-content.ts.
export function Testimonials(){const{t}=useLanguage();if(!testimonials.length)return null;return <section className="container section testimonials"><div className="section-heading"><div><span className="eyebrow">{t('KLIENTËT TANË','OUR CLIENTS')}</span><h2>{t('Me fjalët e tyre.','In their words.')}</h2></div></div><div className="testimonial-grid">{testimonials.map(q=><figure className="reveal" key={q.name+q.company}><blockquote>“{t(...q.quote)}”</blockquote><figcaption><strong>{q.name}</strong><span>{q.company}</span>{q.project&&<Link className="simple-link" href={'/projektet?project='+q.project}>{t('Shiko projektin','View the project')}</Link>}</figcaption></figure>)}</div></section>}

export function Faq({title}:{title?:[string,string]}){const{t}=useLanguage();return <section className="container section faq-section" id="pyetje"><div className="section-heading"><div><span className="eyebrow">{t('PYETJE TË SHPESHTA','FREQUENT QUESTIONS')}</span><h2>{title?t(...title):t('Para se të filloni.','Before you start.')}</h2></div></div><div className="faq-list">{faq.map(([q,a])=><details key={q[0]}><summary>{t(...q)}</summary><p>{t(...a)}</p></details>)}</div></section>}

// Starting price and usual lead time for a service, shown once the owner confirms them.
export function ServiceFacts({slug}:{slug:string}){const{t}=useLanguage();const f=serviceFacts[slug];if(!f?.from&&!f?.lead)return null;return <dl className="service-facts">{f.from&&<div><dt>{t('Çmimi','Price')}</dt><dd>{t(...f.from)}</dd></div>}{f.lead&&<div><dt>{t('Afati i zakonshëm','Usual lead time')}</dt><dd>{t(...f.lead)}</dd></div>}</dl>}
