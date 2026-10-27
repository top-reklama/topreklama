// Twenty earlier Instagram projects (2024–2025), retouched for the portfolio (lighting, colour, framing).
// No unedited originals were supplied, so `original` is left empty. Texts follow the post captions.
const dir='/assets/instagram/portfolio-2026/';
const project=(id:string,name:string,category:string,desc:string,descEn:string,post:string)=>{const image=dir+id+'-professional.webp';return{id,name,nameEn:name,category,image,original:'',desc,descEn,enhanced:true,photos:[image],originals:{} as Record<string,string>,source:'https://www.instagram.com/topreklama.ks/p/'+post+'/'}};
export const portfolio2025Projects=[
  project('minna-fashion','MINNA Fashion','Reklama ndriçuese','Reklamë 3D nga inoksi me ndriçim të fshehtë për MINNA Fashion.','Stainless steel 3D sign with hidden lighting for MINNA Fashion.','DHovXR_AHiE'),
  project('eko-resort-malesia','Eko Resort Malësia · Rugovë','Reklama 3D','Reklamat për Eko Resort Malësia në Rugovë: tabela në fasadë, grafikë në vitrinë dhe tapet me logo.','Signage for Eko Resort Malësia in Rugova: facade sign, window graphics and a branded mat.','DHjb7GegsdK'),
  project('dhurata-sadiku','Dhurata Sadiku','Reklama ndriçuese','Logo nga inoks cilësor me ndriçim të fshehur, për një efekt elegant e modern.','A logo in quality stainless steel with hidden lighting, for an elegant, modern effect.','DHWlcKwx3GI'),
  project('nlb-bank','NLB Banka','Reklama 3D','Reklamë 3D në fasadë, reklamë e brendshme nga inoksi dhe flamuj për NLB Bank.','A 3D facade sign, an interior stainless steel sign and flags for NLB Bank.','DHMUtoEArFH'),
  project('fishop','FISHOP · Prishtinë','Reklama 3D','Reklamë 3D, totem dhe piktura murale për FISHOP Prishtina.','A 3D sign, a totem and wall graphics for FISHOP Prishtina.','DG6TvkzAwHf'),
  project('te-arapi','Mishtorja Te Arapi · Pejë','Reklama 3D','Reklamë 3D për pikën e re të mishtores Te Arapi në Fidanishte, Pejë.','A 3D sign for the new Te Arapi butcher’s shop in Fidanishte, Pejë.','DGtRi9ugHbP'),
  project('arb-dentistry','ARB Advanced Dentistry · Pejë','Reklama 3D','Reklamë 3D për klinikën dentare ARB Advanced Dentistry në Pejë.','A 3D sign for the ARB Advanced Dentistry clinic in Pejë.','DGgkNJAxxNG'),
  project('elko-electric','ELKO Electric · Pejë','Reklama 3D','Reklamë 3D në fasadë për ELKO Electric.','A 3D facade sign for ELKO Electric.','DGRB2DDOXe2'),
  project('restaurant-univers','Restaurant Univers · Pejë','Reklama 3D','Reklamë 3D mbi hyrjen e Restaurant Univers.','A 3D sign above the entrance of Restaurant Univers.','DGELUpUufsq'),
  project('ervini','ERVINI · Istog','Reklama 3D','Reklamë 3D dhe totem për ERVINI në Istog.','A 3D sign and a totem for ERVINI in Istog.','DF8VhJ5gDbP'),
  project('duke-lounge','Dukë Lounge · Pejë','Reklama 3D','Reklamë 3D me dizajn të veçantë dhe materiale druri për Dukë Lounge.','A distinctive 3D sign in wood for Dukë Lounge.','DFx_uX_AoRt'),
  project('aquavita-banner','Aquavita · Birra Peja','Shtyp digjital','Baner me zgjatim për Birra Peja dhe ujin Aquavita.','A banner with extensions for Birra Peja and Aquavita water.','DFqOCXTAtKg'),
  project('dukagjini-center','Dukagjini Center · Prishtinë','Reklama 3D','Reklamë 3D dhe shenja sinjalizuese për qendrën tregtare Dukagjini Residence në Prishtinë.','A 3D sign and wayfinding signs for the Dukagjini Residence shopping centre in Prishtinë.','DFGkKaTuTMI'),
  project('prince-caffe','Prince Caffe · Market Unikron','Reklama 3D','Reklamë 3D dhe brendimi i marketit për Prince Caffe.','A 3D sign and full shop branding for Prince Caffe.','DE5h3OAxn_l'),
  project('gjirafa-flags','Gjirafa · Flamuj','Shtyp digjital','Printimi i flamujve me dizajnin e Gjirafës.','Printed flags in the Gjirafa design.','DEqLeOlu_RE'),
  project('termoteknika','Termoteknika','Reklama 3D','Totem dhe reklamë fasade me dizajn të personalizuar për Termoteknika.','A totem and a custom facade sign for Termoteknika.','DEiZn0NxS82'),
  project('lc-waikiki','LC Waikiki','Shtyp digjital','Folioposter, postera të varur nga tavani dhe lightbox ndriçues për dyqanet LC Waikiki.','Foil posters, ceiling-hung posters and an illuminated lightbox for LC Waikiki stores.','DEA5YSkxp_1'),
  project('grand-bau-gruda','Grand Bau Gruda','Shtyp digjital','Folje one way vision në xham dhe reklama 3D për Grand Bau Gruda.','One-way-vision window film and 3D signs for Grand Bau Gruda.','DDz-Iw4OUgb'),
  project('cardak-restaurant','Çardak Family Restaurant','Reklama ndriçuese','Reklamë 3D me poça dhe folje me dizajn të veçantë për Çardak Restaurant.','A 3D sign with light bulbs and custom film for Çardak Restaurant.','DDSZ77uOhyR'),
  project('jona-dent','Jona Dent','Reklama ndriçuese','Dhëmb nga inoks i artë me ndriçim në prapavijë për Jona Dent.','A gold stainless steel tooth with backlighting for Jona Dent.','DDKwVWYxwrS'),
];
