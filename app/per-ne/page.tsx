'use client';

import Link from '@/components/site-link';
import {useLanguage, ContactBand} from '@/components/site-shell';

export default function About() {
  const {t} = useLanguage();
  const steps = [
    [t('E kuptojmë idenë.', 'We understand your idea.'), t('Bisedojmë për hapësirën, përmasat dhe atë që doni të arrini.', 'We discuss your space, dimensions and what you want to achieve.')],
    [t('Përgatisim zgjidhjen.', 'We prepare the solution.'), t('Përcaktojmë dizajnin, materialet dhe mënyrën e realizimit.', 'We define the design, materials and production approach.')],
    [t('E bëjmë realitet.', 'We bring it to life.'), t('Nga prodhimi te montimi, kujdesemi për çdo detaj të punës.', 'From production to installation, we take care of every detail.')],
  ];
  return <main className="about-redesign">
    <section className="container about-opening">
      <div className="about-opening-copy">
        <span className="eyebrow">{t('NJOHUNI ME TOP REKLAMA', 'MEET TOP REKLAMA')}</span>
        <h1>{t('Reklama juaj.', 'Your brand.')}<br/><span>{t('Zanati ynë.', 'Our craft.')}</span></h1>
        <p>{t('Projektim, prodhim dhe montim reklamash në Kosovë. Bashkojmë dizajnin me materialin për t’i dhënë biznesit tuaj një pamje që dallohet.', 'Signage design, production and installation in Kosovo. We bring design and materials together to give your business a distinctive presence.')}</p>
        <Link className="button" href="/projektet">{t('Shiko punën tonë', 'Explore our work')}</Link>
        <div className="about-origin"><strong>{t('Që nga 2006', 'Since 2006')}</strong><span>{t('Pjesë e Dukagjini Group', 'Part of Dukagjini Group')}</span></div>
      </div>
      <figure className="about-opening-photo"><img src="/assets/service-signage.png" alt={t('Logoja Top Reklama në shkronja tredimensionale ngjyrë magenta', 'Top Reklama magenta dimensional signage')} fetchPriority="high"/><figcaption>{t('Dizajni merr formë.', 'Design takes shape.')}</figcaption></figure>
    </section>

    <section className="container about-approach">
      <div className="about-approach-copy"><span className="eyebrow">{t('KUSH JEMI', 'WHO WE ARE')}</span><h2>{t('Një partner.', 'One partner.')}<br/>{t('I gjithë realizimi.', 'Every step.')}</h2><p>{t('Të themeluar në vitin 2006 nga Dukagjini Group, punojmë me biznese të vogla e të mëdha për ta sjellë identitetin e tyre në hapësirën e përditshme.', 'Founded in 2006 by Dukagjini Group, we work with businesses of all sizes to bring their identity into everyday spaces.')}</p><p>{t('Reklama 3D e ndriçuese, autografikë, shtyp digjital dhe produkte të personalizuara. Një vend për ta zhvilluar idenë dhe për ta çuar deri në montim.', 'Dimensional and illuminated signage, vehicle graphics, digital print and personalised products. One place to develop your idea and take it through to installation.')}</p><Link className="about-text-link" href="/sherbimet">{t('Njihuni me shërbimet', 'Discover our services')}</Link></div>
      <div className="about-steps">{steps.map(([title, text], i) => <article key={i}><span className="about-step-number">0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="about-evidence"><div className="container">
      <div className="about-evidence-heading"><div><span className="eyebrow">{t('NGA PUNA JONË', 'FROM OUR WORK')}</span><h2>{t('Nga afër. Nga larg.', 'Up close. From afar.')}<br/>{t('Detaji ka rëndësi.', 'Details matter.')}</h2></div><p>{t('Në fasadë, në rrugë apo brenda biznesit tuaj — çdo sipërfaqe është një mundësi për t’u dalluar.', 'On a façade, on the road or inside your business — every surface is an opportunity to stand out.')}</p></div>
      <div className="about-project-pair">
        <Link href="/projektet?project=unicron" className="about-project"><div className="about-project-image"><img src="/assets/instagram/portfolio-2026/unicron-03-professional.webp" alt={t('Reklama Unicron e montuar mbi objekt, në dritën e ditës', 'Unicron rooftop signage in daylight')} loading="lazy"/></div><div className="about-project-caption"><h3>Unicron</h3><span>{t('Reklama 3D', 'Dimensional signage')}</span></div></Link>
        <Link href="/projektet?project=pakketo" className="about-project"><div className="about-project-image"><img src="/assets/instagram/portfolio-2026/pakketo-01-professional.webp" alt={t('Fasada e Pakketo me reklamë dhe grafikë në xham', 'Pakketo façade with signage and window graphics')} loading="lazy"/></div><div className="about-project-caption"><h3>Pakketo</h3><span>{t('Identitet në fasadë', 'Façade branding')}</span></div></Link>
      </div>
    </div></section>
    <section className="container about-reach"><span className="eyebrow">{t('PRANË BIZNESIT TUAJ', 'CLOSE TO YOUR BUSINESS')}</span><div><h2>{t('Nga Prishtina, në gjithë Kosovën.', 'From Prishtina, across Kosovo.')}</h2><p>Prishtinë · Pejë · Prizren · Mitrovicë · Gjilan · Gjakovë · Ferizaj</p></div></section>
    <ContactBand/>
  </main>;
}
