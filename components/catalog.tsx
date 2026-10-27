'use client';

import Link from '@/components/site-link';
import { products, categoryEnglish } from '@/lib/catalog';
import { serviceBrand, serviceProjects, projectImage } from '@/lib/service-work';
import { useLanguage, ContactBand } from './site-shell';
import { ProductVisual } from './product-visual';

const sizeLabel: Record<string, [string, string]> = { tshirt: ['S – XXL · 3 ngjyra', 'S – XXL · 3 colours'], cap: ['Madhësi universale', 'One size'], cards: ['85 × 55 mm', '85 × 55 mm'], pens: ['Printim me logo', 'Logo print'] };

// Made to project: each opens its service page, where the branded example and the client work are shown.
const madeToProject = [
  { slug: 'ndricuese', name: ['Reklama ndriçuese', 'Illuminated signage'], desc: ['Shkronja LED dhe kuti ndriçuese për fasada.', 'LED letters and light boxes for facades.'] },
  { slug: '3d', name: ['Reklama 3D', '3D signage'], desc: ['Shkronja dhe logo me dimension.', 'Dimensional letters and logos.'] },
  { slug: 'autografike', name: ['Autografikë', 'Vehicle graphics'], desc: ['Nga logo në derë te mbështjellja e plotë.', 'From a door logo to a full wrap.'] },
  { slug: 'shtyp', name: ['Shtyp digjital', 'Digital printing'], desc: ['Banera, folje, mure dhe vitrina.', 'Banners, films, walls and windows.'] },
  { slug: 'billborde', name: ['Billborde', 'Billboards'], desc: ['Grafikë në format të madh.', 'Large-format outdoor graphics.'] },
] as const;

// The products page in two halves: things you design yourself online, and work we make to project.
export default function Catalog() {
  const { t } = useLanguage();
  const online = products.filter(p => p.customizable);
  return <main className="catalog-page products-page">
    <section className="container page-intro products-intro">
      <div>
        <span className="eyebrow">{t('PRODUKTET', 'PRODUCTS')}</span>
        <h1>{t('Ideja juaj.', 'Your idea.')}<br/><span className="muted-heading">{t('Në çdo format.', 'In every format.')}</span></h1>
        <p>{t('Disa produkte i dizajnoni vetë, online, në pak minuta. Të tjerat i prodhojmë sipas projektit, me përmasat dhe materialin që ju duhen.', 'Some products you design yourself online in a few minutes. Others we make to project, in the size and material you need.')}</p>
        <div className="products-jump"><a href="#online">{t('Personalizo online', 'Customize online')}</a><a href="#sipas-projektit">{t('Sipas projektit', 'Made to project')}</a></div>
      </div>
      <div className="products-intro-visual"><img src="/assets/merch-kit.webp" alt={t('Kapelë, filxhan, stilolapsa dhe kartëvizita me logon e Top Reklama', 'Cap, mug, pens and business cards with the Top Reklama logo')} fetchPriority="high"/><span className="service-block-tag">Top Reklama</span></div>
    </section>

    <section className="container products-online" id="online" aria-labelledby="online-title">
      <div className="products-section-head"><span className="eyebrow">{t('01 · PERSONALIZO ONLINE', '01 · CUSTOMIZE ONLINE')}</span><h2 id="online-title">{t('Dizajnojeni vetë.', 'Design it yourself.')}</h2><p>{t('Zgjidhni produktin, ngarkoni logon dhe shikoni rezultatin para se ta porosisni.', 'Choose a product, upload your logo and see the result before you order.')}</p></div>
      <div className="products-online-grid">{online.map(p => <Link className="products-online-card" href={'/studio?product=' + p.id} key={p.id}>
        <div className="products-online-visual"><ProductVisual id={p.id}/></div>
        <div className="products-online-copy"><span>{t(p.category, categoryEnglish[p.category] || p.category)}</span><h3>{t(p.name, p.en)}</h3><p>{t(p.desc, ({ tshirt: 'For your team, event or idea.', cap: 'A small detail with a strong presence.', cards: 'Your introduction, at every meeting.', pens: 'Your brand in the right hands.' } as Record<string, string>)[p.id] || '')}</p><small>{t(...(sizeLabel[p.id] || ['', '']))}</small><strong className="button secondary">{t('Personalizo', 'Customize')}</strong></div>
      </Link>)}</div>
      <ol className="products-steps">{([['Zgjidhni produktin', 'Choose the product'], ['Ngarkoni logon ose tekstin', 'Add your logo or text'], ['Dërgoni kërkesën, ne e konfirmojmë', 'Send the request, we confirm it']] as const).map(([a, b], i) => <li key={a}><span>0{i + 1}</span>{t(a, b)}</li>)}</ol>
    </section>

    <section className="products-project" id="sipas-projektit" aria-labelledby="project-title">
      <div className="container">
        <div className="products-section-head"><span className="eyebrow">{t('02 · SIPAS PROJEKTIT', '02 · MADE TO PROJECT')}</span><h2 id="project-title">{t('E prodhojmë për ju.', 'We make it for you.')}</h2><p>{t('Na dërgoni përmasat ose një foto të vendit dhe ne ju kthejmë ofertën. Çdo shërbim fillon me shembullin tonë dhe vazhdon me punë për klientët.', 'Send us the dimensions or a photo of the location and we will come back with a quote. Each service starts with our own example, followed by client work.')}</p></div>
        <div className="products-project-list">{madeToProject.map(s => { const work = serviceProjects(s.slug).slice(0, 2); return <article className="products-project-row" key={s.slug}>
          <Link className="products-project-brand" href={'/sherbimet/' + s.slug}><img src={'/assets/' + serviceBrand[s.slug]} alt={t(s.name[0], s.name[1])} loading="lazy"/><span className="service-block-tag">Top Reklama</span></Link>
          <div className="products-project-copy"><h3><Link href={'/sherbimet/' + s.slug}>{t(s.name[0], s.name[1])}</Link></h3><p>{t(s.desc[0], s.desc[1])}</p>{work.length > 0 && <div className="products-project-work">{work.map(p => <Link key={p.id} href={'/projektet?project=' + p.id} title={p.name}><img src={projectImage(p.image)} alt={p.name} loading="lazy"/></Link>)}</div>}<div className="products-project-actions"><Link className="button secondary" href={'/kontakti?service=' + encodeURIComponent(s.name[0])}>{t('Kërko ofertë', 'Request a quote')}</Link><Link className="simple-link" href={'/sherbimet/' + s.slug}>{t('Shiko realizimet', 'See the work')}</Link></div></div>
        </article>; })}</div>
      </div>
    </section>
    <ContactBand/>
  </main>;
}
