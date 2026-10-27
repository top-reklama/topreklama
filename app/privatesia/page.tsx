'use client';

import Link from '@/components/site-link';
import {useLanguage} from '@/components/site-shell';

// Describes only what the site actually does with personal data. Review with the owner before launch.
export default function Privacy() {
  const {t} = useLanguage();
  const sections: [string, string, string[]][] = [
    [t('Kush i përpunon të dhënat', 'Who processes your data'), t('Top Reklama, Rr. Bajram Kelmendi, Qendra e biznesit “DODONA”, nr. 35, Prishtinë. Për çdo pyetje rreth të dhënave tuaja: info@topreklama.net ose +383 49 750 460.', 'Top Reklama, Rr. Bajram Kelmendi, “DODONA” business centre, no. 35, Prishtina. For any question about your data: info@topreklama.net or +383 49 750 460.'), []],
    [t('Çfarë mbledhim', 'What we collect'), t('Vetëm atë që na jepni ose që nevojitet për funksionimin e faqes:', 'Only what you give us or what the site needs to work:'), [
      t('Kërkesa për ofertë dhe porosi: emri, kompania, email-i, telefoni, mesazhi, përmasat dhe pajtimi juaj.', 'Quote requests and orders: name, company, email, phone, message, dimensions and your consent.'),
      t('Dizajnet dhe skedarët që ngarkoni në studio ose me kërkesën (logo, fotografi, materiale grafike).', 'Designs and files you upload in the studio or with a request (logos, photos, artwork).'),
      t('Një cookie sesioni (tr_session) që i mban dizajnet dhe kërkesat tuaja në këtë pajisje deri në 30 ditë.', 'A session cookie (tr_session) that keeps your designs and requests on this device for up to 30 days.'),
      t('Adresa IP, e përdorur vetëm për të kufizuar kërkesat e tepërta dhe abuzimet; fshihet pas rreth një dite.', 'Your IP address, used only to limit excessive requests and abuse; deleted after about a day.'),
    ]],
    [t('Pse i përdorim', 'Why we use it'), t('Për t’ju kthyer përgjigje, për të përgatitur ofertën dhe prodhimin e porosisë suaj, dhe për ta mbrojtur faqen nga abuzimet. Nuk i shesim të dhënat dhe nuk i përdorim për reklama.', 'To answer you, to prepare your quote and produce your order, and to protect the site from abuse. We do not sell your data or use it for advertising.'), []],
    [t('Ku ruhen', 'Where it is stored'), t('Të dhënat dhe skedarët ruhen në infrastrukturën e Cloudflare që e mban faqen. Skedarët tuaj nuk janë publikë dhe nuk shfaqen në portofolin tonë.', 'Data and files are stored on the Cloudflare infrastructure that hosts the site. Your files are not public and never appear in our portfolio.'), []],
    [t('Sa kohë i mbajmë', 'How long we keep it'), t('Për aq kohë sa nevojitet për kërkesën ose porosinë tuaj dhe për detyrimet ligjore. Mund të kërkoni fshirjen e tyre në çdo kohë.', 'For as long as your request or order needs it and the law requires. You can ask us to delete it at any time.'), []],
    [t('Cookie dhe analitika', 'Cookies and analytics'), t('Faqja përdor vetëm cookie-n e sesionit të përmendur më lart. Nuk përdorim cookie reklamash ose analitike. Harta e qyteteve ngarkohet nga OpenStreetMap, prandaj shfletuesi juaj i dërgon atij shërbimi adresën IP; ai nuk vendos cookie.', 'The site uses only the session cookie described above. We do not use advertising or analytics cookies. The city map loads from OpenStreetMap, so your browser shares your IP address with that service; it sets no cookies.'), []],
    [t('Të drejtat tuaja', 'Your rights'), t('Mund të kërkoni qasje, korrigjim ose fshirje të të dhënave tuaja, ose ta tërhiqni pajtimin, duke na shkruar në info@topreklama.net. Keni të drejtë të ankoheni edhe te Agjencia për Informim dhe Privatësi e Kosovës.', 'You can ask to access, correct or delete your data, or withdraw your consent, by writing to info@topreklama.net. You may also complain to Kosovo’s Information and Privacy Agency.'), []],
  ];
  return <main className="privacy-page">
    <section className="container page-intro">
      <span className="eyebrow">{t('PRIVATËSIA', 'PRIVACY')}</span>
      <h1>{t('Të dhënat tuaja,', 'Your data,')}<br/><span className="muted-heading">{t('të trajtuara me kujdes.', 'handled with care.')}</span></h1>
    </section>
    <section className="container section-topless privacy-text">
      {sections.map(([heading, text, items]) => <div key={heading}>
        <h2>{heading}</h2>
        <p>{text}</p>
        {items.length > 0 && <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>}
      </div>)}
      <p className="privacy-back"><Link className="simple-link" href="/kontakti">{t('Kërko ofertë', 'Request a quote')}</Link></p>
    </section>
  </main>;
}
