'use client';

import Link from '@/components/site-link';
import { useState } from 'react';
import { products, categories, categoryEnglish } from '@/lib/catalog';
import { useLanguage, ContactBand } from './site-shell';
import { ProductVisual } from './product-visual';

// Made-to-project items open the quote form with a service the form already lists.
const quoteService: Record<string, string> = { signage: 'Reklama 3D' };

function productHref(p: typeof products[number]) {
  return p.customizable ? '/studio?product=' + p.id : p.id === 'vehicle' ? '/projektet?category=vehicle' : '/kontakti?service=' + encodeURIComponent(quoteService[p.id] ?? p.id);
}

export function ProductGrid({ limit, category }: { limit?: number; category?: string }) {
  const { t } = useLanguage();
  return <div className="product-grid">{products.filter(p => !category || category === 'Të gjitha' || p.category === category).slice(0, limit).map(p =>
    <Link className="product-card" href={productHref(p)} key={p.id}>
      <div className="product-card-image"><ProductVisual id={p.id}/><span className="product-label">{p.customizable ? t('Dizajnoje vetë', 'Make it yours') : t('Sipas kërkesës', 'Made to order')}</span></div>
      <div className="product-card-caption"><span className="product-category">{t(p.category, categoryEnglish[p.category] || p.category)}</span><h3>{t(p.name, p.en)}</h3><p>{t(p.desc, 'Made to order, with your design.')}</p><span className="product-card-action">{p.customizable ? t('Personalizo', 'Customize') : t('Zbulo më shumë', 'Learn more')}</span></div>
    </Link>)}</div>;
}

export default function Catalog() {
  const { t } = useLanguage();
  const [category, setCategory] = useState('Të gjitha');
  const [search, setSearch] = useState('');
  const filtered = products.filter(p => (category === 'Të gjitha' || p.category === category) && (p.name + ' ' + p.en + ' ' + p.category).toLowerCase().includes(search.toLowerCase()));

  return <main className="catalog-page">
    <section className="catalog-opening">
      <div className="container catalog-opening-layout">
        <div className="catalog-opening-copy">
          <span className="eyebrow">{t('PRODUKTET TOP REKLAMA', 'TOP REKLAMA PRODUCTS')}</span>
          <h1>{t('Ideja juaj.', 'Your idea.')}<br/><span>{t('Në çdo format.', 'In every format.')}</span></h1>
          <p>{t('Nga tekstili dhe materialet promocionale te grafikat për automjete dhe reklamat 3D. Zgjidhni produktin, ne e bëjmë realitet.', 'From apparel and promotional pieces to vehicle graphics and 3D signage. Choose a product and we will make it real.')}</p>
          <a href="#produktet" className="catalog-opening-link">{t('Shiko produktet', 'Explore products')} <span aria-hidden="true">↓</span></a>
        </div>
        <div className="catalog-opening-visual" aria-hidden="true"><img src="/assets/service-illuminated.webp" alt="" fetchPriority="high"/><span className="catalog-opening-visual-caption">{t('REKLAMA 3D & NDRIÇUESE', '3D & ILLUMINATED SIGNAGE')}</span></div>
      </div>
    </section>

    <section className="container catalog-section" id="produktet">
      <div className="catalog-section-heading"><div><span className="eyebrow">{t('ZGJEDHJA JUAJ', 'YOUR SELECTION')}</span><h2>{t('Zgjidhni produktin.', 'Find your product.')}</h2></div><p>{t('Për biznese, evente dhe ide që duan të shihen.', 'For businesses, events and ideas made to be seen.')}</p></div>
      <div className="catalog-tools"><div className="filters" aria-label={t('Kategoritë', 'Categories')}>{categories.map(c => <button key={c} className={c === category ? 'selected' : ''} aria-pressed={c === category} onClick={() => setCategory(c)}>{t(c, categoryEnglish[c] || c)}</button>)}</div><input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder={t('Kërko produktin…', 'Find a product…')} aria-label={t('Kërko produktin', 'Find a product')}/></div>
      <p className="results-count" role="status">{filtered.length} {t('produkte', 'products')}</p>
      <div className="product-grid">{filtered.map((p, index) => <Link className="product-card" href={productHref(p)} key={p.id}>
        <div className={'product-card-image' + (p.id === 'signage' ? ' catalog-photo' : '')}>{p.id === 'signage' ? <img src="/assets/sign-night-professional.webp" alt={t(p.name, p.en)} loading="lazy"/> : <ProductVisual id={p.id}/>}<span className="catalog-card-index">{String(index + 1).padStart(2, '0')}</span></div>
        <div className="product-card-caption"><div><span className="catalog-card-category">{t(p.category, categoryEnglish[p.category] || p.category)}</span><h3>{t(p.name, p.en)}</h3></div><span className="product-card-action">{p.customizable ? t('Personalizo', 'Customize') : t('Kërko ofertë', 'Request a quote')}</span></div>
      </Link>)}</div>
      {!filtered.length && <div className="empty-state"><h2>{t('Nuk u gjetën produkte.', 'No products found.')}</h2><p>{t('Provoni një fjalë tjetër ose zgjidhni një kategori.', 'Try another word or choose a category.')}</p><button className="button secondary" onClick={() => { setCategory('Të gjitha'); setSearch(''); }}>{t('Shfaq të gjitha', 'Show all products')}</button></div>}
    </section>

    <section className="container catalog-ways" aria-labelledby="catalog-ways-title">
      <div className="catalog-ways-heading"><span className="eyebrow">{t('SI POROSITET', 'HOW TO ORDER')}</span><h2 id="catalog-ways-title">{t('Dy mënyra', 'Two ways')}<br/><span>{t('për të filluar.', 'to get started.')}</span></h2></div>
      <div className="catalog-way">
        <span className="catalog-way-index">01</span>
        <h3>{t('Personalizo online', 'Customize online')}</h3>
        <p>{t('Bluza, kapela, stilolapsa dhe kartëvizita. Ngarkoni logon, shikoni rezultatin dhe na dërgoni kërkesën.', 'T-shirts, caps, pens and business cards. Upload your logo, preview the result and send us your request.')}</p>
        <Link className="simple-link" href="/studio">{t('Hap studion', 'Open the studio')}</Link>
      </div>
      <div className="catalog-way">
        <span className="catalog-way-index">02</span>
        <h3>{t('Sipas projektit', 'Made to project')}</h3>
        <p>{t('Reklama 3D, ndriçuese dhe autografikë. Na dërgoni përmasat ose një foto të vendit, dhe ne ju kthejmë ofertën.', '3D and illuminated signage and vehicle graphics. Send us the dimensions or a photo of the location and we will come back with a quote.')}</p>
        <Link className="simple-link" href="/kontakti">{t('Kërko ofertë', 'Request a quote')}</Link>
      </div>
    </section>
    <ContactBand/>
  </main>;
}
