// Content the owner fills in. Sections stay hidden until they have something real to show,
// so nothing here is invented: add quotes, prices and lead times only once they are confirmed.
type Pair=[string,string];

// Client quotes, Albanian first. Example:
// {quote:['Reklama doli më bukur se sa e prisnim.','The sign came out better than we hoped.'],name:'Emri Mbiemri',company:'Kompania',project:'interex'},
export const testimonials:{quote:Pair;name:string;company:string;project?:string}[]=[];

// Per service: a starting price and a usual lead time, e.g. from:['nga 450 €','from €450'], lead:['5–10 ditë pune','5–10 working days'].
export const serviceFacts:Record<string,{from?:Pair;lead?:Pair}>={
  ndricuese:{},'3d':{},autografike:{},shtyp:{},billborde:{},promocionale:{},
};

// Short project stories for the portfolio, keyed by project id. Example:
// interex:{brief:['…','…'],solution:['…','…'],result:['…','…']},
export const projectStories:Record<string,{brief:Pair;solution:Pair;result?:Pair}>={};

// Answers describe how the site and process work today. Review the permit and design answers with the owner.
export const faq:[Pair,Pair][]=[
  [['Sa kushton një reklamë?','How much does a sign cost?'],['Çmimi varet nga përmasat, materiali, ndriçimi dhe montimi. Na dërgoni përmasat përafërsisht dhe një foto të vendit, dhe ju kthejmë ofertë të detajuar.','The price depends on size, materials, lighting and installation. Send us rough dimensions and a photo of the location and we will reply with a detailed quote.']],
  [['Sa zgjat realizimi?','How long does it take?'],['Afati varet nga lloji i projektit dhe sasia. E konfirmojmë bashkë me ofertën, para se të fillojmë prodhimin.','It depends on the type of project and the quantity. We confirm the timeline together with the quote, before production starts.']],
  [['A e shoh dizajnin para prodhimit?','Do I see the design before production?'],['Po. Para prodhimit ju dërgojmë provën përfundimtare për miratim. Pa miratimin tuaj nuk fillojmë.','Yes. Before production we send you the final proof for approval. We do not start without it.']],
  [['A e bëni edhe montimin?','Do you also install?'],['Po. Reklamat dhe autografikën i prodhojmë dhe i montojmë vetë, me kontroll përfundimtar në vend.','Yes. We produce and install signs and vehicle graphics ourselves, with a final check on site.']],
  [['Në çfarë formati ta dërgoj logon?','What file format should my logo be?'],['Logo në format vektorial (AI, PDF ose SVG) jep rezultatin më të mprehtë. Në studio online mund të ngarkoni PNG, JPG ose WebP; për skedarë të tjerë na shkruani në info@topreklama.net.','A vector logo (AI, PDF or SVG) gives the sharpest result. The online studio accepts PNG, JPG or WebP; for other files, email info@topreklama.net.']],
  [['A më ndihmoni me dizajnin?','Can you help with the design?'],['Po. Nëse keni vetëm idenë ose logon, ekipi ynë e përgatit dizajnin dhe ju propozon materialin e duhur.','Yes. If you only have an idea or a logo, our team prepares the design and suggests the right material.']],
  [['Po lejet për reklamë në fasadë?','What about permits for a facade sign?'],['Lejet i lëshon komuna. Ju këshillojmë për përmasat dhe dokumentet që zakonisht kërkohen për projektin tuaj.','Permits are issued by the municipality. We advise you on the dimensions and documents usually required for your project.']],
];

// Where each project was installed, by project id, taken from the captions of the Instagram posts.
// Towns outside the seven offices (Istog, Vushtrri, Podujevë) show on the map as project locations.
// Not tagged because no post names a place: American Retail Park, the printed flags, Pakketo, KFC,
// Kubeti, Kolegji Heimerer, the studio pieces, MINNA, Dhurata Sadiku, NLB, Aquavita, Prince Caffe,
// Gjirafa, Termoteknika, LC Waikiki, Grand Bau Gruda, Çardak and Jona Dent. Add them here once confirmed.
export const projectCities:Record<string,string>={
  interex:'Prishtinë',altera:'Prishtinë','ximi-v':'Prishtinë',
  'top-office':'Pejë','gafuri-dent':'Pejë','smile-park':'Pejë','devolli-gold':'Pejë',esthetic:'Pejë',
  'libraria-dukagjini':'Pejë','dukagjini-exterior':'Pejë','dukagjini-blade':'Pejë','interex-totem':'Pejë',
  unicron:'Pejë','sola-bus':'Pejë','peja-billboards':'Pejë','sola-billboard':'Pejë',
  'hotel-trofta':'Istog',bos:'Istog','hebs-shawarma':'Vushtrri','jysk-podujeve':'Podujevë',
  fishop:'Prishtinë','dukagjini-center':'Prishtinë',
  'te-arapi':'Pejë','arb-dentistry':'Pejë','elko-electric':'Pejë','restaurant-univers':'Pejë','duke-lounge':'Pejë',
  // Rugova lies within the municipality of Pejë.
  'eko-resort-malesia':'Pejë',ervini:'Istog',
  cisco:'Pejë','ip-petrol':'Komoran',iwash:'Komoran',
  // Rruga B is in Prishtinë.
  lochky:'Prishtinë',
  // Central Park, Prishtina Mall and Klan Arena: the captions name Central Park as Prishtinë.
  'central-park':'Prishtinë',vitaland:'Prishtinë','birra-peja-citybox':'Prishtinë','go-city-lightbox':'Prishtinë','hebs-central-park':'Prishtinë','interex-central-park':'Prishtinë','dukagjini-central-park':'Prishtinë',
  'lochky-mall':'Prishtinë','dukagjini-prishtina-mall':'Prishtinë','hebs-led-lightboxes':'Prishtinë',
  'hebs-gjilan':'Gjilan','my-shawarma':'Gjilan','jysk-interior':'Mitrovicë',
};

// Projects for the same client, so each project page can show the client's other work. Separate companies with
// similar names (ELKO and ELKO Electric) are kept apart.
const clientGroups:Record<string,string[]>={
  'Interex':['interex','interex-totem','american-retail','printed-flags','interex-information','interex-american-retail','interex-central-park'],
  'HEB’S & My Shawarma':['hebs-shawarma','hebs-gjilan','my-shawarma','hebs-led-lightboxes','hebs-central-park','ip-petrol'],
  'Libraria Dukagjini':['libraria-dukagjini','dukagjini-exterior','dukagjini-blade','dukagjini-central-park','dukagjini-prishtina-mall'],
  'ELKO':['elko-shpk','elko-facade','elko-group'],
  'Birra Peja':['peja-billboards','aquavita-banner','birra-peja-citybox','birra-peja-banner'],
  'Sola · Devolli Group':['sola-bus','sola-billboard','devolli-wrap'],
  'LC Waikiki':['lc-waikiki','lc-waikiki-festive','lc-window-branding'],
  'JYSK':['jysk-podujeve','jysk-interior'],'NLB Banka':['nlb-bank','nlb-glass'],'MINNA Fashion':['minna-fashion','minna-facade'],
  'Lochky':['lochky','lochky-mall'],'Comodita Home':['comodita-wrap','comodita-van'],'Termoteknika':['termoteknika','termoteknika-totem'],
  'GO+':['go-plus','go-city-lightbox'],'Unicron':['unicron','unicron-totem'],'Prince Caffe':['prince-caffe','prince-display'],'IWASH':['iwash','ip-petrol'],
};
export const projectClient:Record<string,{name:string;ids:string[]}>=Object.fromEntries(Object.entries(clientGroups).flatMap(([name,ids])=>ids.map(id=>[id,{name,ids}])));

