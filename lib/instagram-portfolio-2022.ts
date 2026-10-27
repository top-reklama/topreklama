// Twenty further Instagram projects (2022–2025), many of them new installations for returning clients.
// Retouched for the portfolio; no unedited originals were supplied, so `original` is left empty. Texts follow the captions.
const dir='/assets/instagram/portfolio-2026/';
const project=(id:string,name:string,category:string,desc:string,descEn:string,post:string)=>{const image=dir+id+'-professional.webp';return{id,name,nameEn:name,category,image,original:'',desc,descEn,enhanced:true,photos:[image],originals:{} as Record<string,string>,source:'https://www.instagram.com/topreklama.ks/p/'+post+'/'}};
export const portfolio2022Projects=[
  project('birra-peja-banner','Birra Peja Lager · Baner','Shtyp digjital','Baner me zgjatim të shishes për Birra Peja Lager.','A banner with a bottle extension for Birra Peja Lager.','CxtMubyr-o9'),
  project('interex-information','Interex · Strehimore karrocash','Display','Reklama informative dhe strehimore e brendshme për karrocat e Interex.','Information signage and a branded trolley shelter for Interex.','DJPcyhLAMwe'),
  project('dukagjini-central-park','Libraria Dukagjini · Central Park','Reklama 3D','Reklamat për pikën e re të Librarisë Dukagjini në Interex – Central Park, Prishtinë.','Signage for the new Dukagjini Bookstore at Interex – Central Park, Prishtinë.','DJHFJQ7I8DT'),
  project('hebs-gjilan','HEB’S · Albi Mall Gjilan','Reklama ndriçuese','Reklama 3D ndriçuese për HEB’S në Albi Mall, Gjilan.','Illuminated 3D signs for HEB’S at Albi Mall, Gjilan.','C3TRj_1IZOG'),
  project('my-shawarma','My Shawarma · Albi Mall Gjilan','Reklama ndriçuese','Reklamë 3D me ndriçim dhe reklama pleksi dyshtresore ndriçuese për My Shawarma në Albi Mall, Gjilan.','An illuminated 3D sign and two-layer lit plexiglass signs for My Shawarma at Albi Mall, Gjilan.','C3LjOVvoxH2'),
  project('hebs-led-lightboxes','HEB’S · Sheshi i Prishtinës','Reklama ndriçuese','Light box LED dyanësore për terrasën e HEB’S në sheshin e Prishtinës.','Double-sided LED light boxes for the HEB’S terrace on the Prishtinë square.','C2aoBY3o3hc'),
  project('elko-facade','ELKO · Fasada','Reklama 3D','Totemi dhe reklamat 3D në hapësira të ndryshme për ELKO.','A totem and 3D signs across several spaces for ELKO.','C2NwA4tId6R'),
  project('go-city-lightbox','GO+ · City Light Box','Shtyp digjital','City light box për GO+ në Central Park, Prishtinë.','City light boxes for GO+ at Central Park, Prishtinë.','CwqQA9Erivf'),
  project('lochky-mall','Lochky · Prishtina Mall','Reklama 3D','Reklamë 3D dhe brendim i dyqanit Lochky në Prishtina Mall.','A 3D sign and store branding for Lochky at Prishtina Mall.','Cs9QO0-IPTf'),
  project('comodita-van','Comodita · Furgon','Autografikë','Autobrendim për furgonin e Comodita Home.','A vehicle wrap for the Comodita Home van.','Chz41rxo6et'),
  project('elko-group','ELKO Group · Totem','Reklama ndriçuese','Totem me reklama 3D dhe 2D me LED për ELKO Group.','A totem with lit 3D and 2D signs for ELKO Group.','CfZrccVIL13'),
  project('termoteknika-totem','Termoteknika · Vaillant','Reklama ndriçuese','Totem LED për Termoteknika dhe Vaillant.','An LED totem for Termoteknika and Vaillant.','CePI4N1ozO3'),
  project('nlb-glass','NLB Banka · Klan Arena','Shtyp digjital','Brendimi i xhamave për NLB Banka në Klan Arena.','Window branding for NLB Banka at Klan Arena.','Cy3jLejIm5i'),
  project('lc-window-branding','LC Waikiki · Xhama & Texframe','Shtyp digjital','Folje e printuar në xhama, light box, Texframe dhe postera për LC Waikiki.','Printed window film, a light box, Texframe and posters for LC Waikiki.','CgAHYqEIdUV'),
  project('hebs-central-park','HEB’S · Central Park','Reklama 3D','Reklama 3D për hapësirat e brendshme dhe të jashtme të HEB’S në Central Park, Prishtinë.','3D signs inside and outside HEB’S at Central Park, Prishtinë.','C0ChWiXoko-'),
  project('interex-american-retail','Interex · American Retail Park','Reklama 3D','Reklamë 3D dhe brendim i hapësirave të brendshme për Interex në American Retail Park.','A 3D sign and interior branding for Interex at American Retail Park.','CwVfW7uIepd'),
  project('dukagjini-prishtina-mall','Libraria Dukagjini · Prishtina Mall','Reklama 3D','Reklama 3D dhe brendimi i Librarisë Dukagjini në Prishtina Mall.','3D signs and branding for the Dukagjini Bookstore at Prishtina Mall.','CsjadYLItYT'),
  project('minna-facade','MINNA Fashion · Fasada','Reklama ndriçuese','Reklama 3D në fasadë dhe brendim i hapësirave të brendshme për MINNA Fashion.','3D facade signs and interior branding for MINNA Fashion.','CsowexXoS1T'),
  project('interex-central-park','Interex extra · Central Park','Reklama 3D','Brendimi i hapësirave të brendshme dhe reklama 3D për Interex në Central Park, Prishtinë.','Interior branding and 3D signs for Interex at Central Park, Prishtinë.','C1C_-9IIm9n'),
  project('jysk-interior','JYSK · Mall of Mitrovica','Reklama 3D','Reklamat për pikën e re të JYSK në Mall of Mitrovica; pjesa prej druri nga Nero Home.','Signage for the new JYSK store at Mall of Mitrovica; the woodwork is by Nero Home.','DI7DElXgXBh'),
];
