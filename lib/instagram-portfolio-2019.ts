// Twenty archive Instagram projects (2019–2020), retouched for the portfolio. Some originals were small, so
// fine lettering may differ slightly; `original` is left empty. Texts follow the post captions.
const dir='/assets/instagram/portfolio-2026/';
const project=(id:string,name:string,category:string,desc:string,descEn:string,post:string)=>{const image=dir+id+'-professional.webp';return{id,name,nameEn:name,category,image,original:'',desc,descEn,enhanced:true,photos:[image],originals:{} as Record<string,string>,source:'https://www.instagram.com/topreklama.ks/p/'+post+'/'}};
export const portfolio2019Projects=[
  project('finnesa-pickup','Finnesa · Pick-up','Autografikë','Brendimi i pick-up-it për Finnesa, prodhuesin e miellit të Devolli Corporation.','A pick-up wrap for Finnesa, the flour brand of Devolli Corporation.','CCEZiFaFgDq'),
  project('active-plus','Active+ Alkaline Water','Autografikë','Brendimi i automjetit për ujin alkalin Active+.','A vehicle wrap for Active+ alkaline water.','CBdv-16l7Mk'),
  project('go-matte-wrap','GO+ · Folje mat','Autografikë','Brendim i automjetit me folje mat për GO+.','A matte-film vehicle wrap for GO+.','CBYi5UNFrML'),
  project('sola-lasko-mural','Sola & Laško · Mural','Shtyp digjital','Mural i shtypur në cilësi HD dhe i montuar nga ekipi ynë.','A mural printed in HD quality and installed by our team.','CBERGaLldd4'),
  project('pascalin-fleet','Cafe Pascalin · Flota','Autografikë','Brendimi i flotës së automjeteve të Cafe Pascalin (Devolli Corporation) në Maqedoni.','Fleet branding for Cafe Pascalin (Devolli Corporation) in North Macedonia.','B-4AZollB5S'),
  project('hotel-dukagjini','Hotel Dukagjini','Reklama 3D','Reklamë 3D nga mesingu në Hotel Dukagjini.','A 3D brass sign at Hotel Dukagjini.','B-tw_RQlp5s'),
  project('rina-market','Rina Market','Reklama ndriçuese','Reklamë 3D me ndriçim LED për Rina Market.','A 3D sign with LED lighting for Rina Market.','B-fLctOlY59'),
  project('prince-vehicle','Devolli Princ Caffe · Furgon','Autografikë','Brendimi i automjetit për Devolli Princ Caffe.','A vehicle wrap for Devolli Princ Caffe.','B8SA9AhlgYX'),
  project('tango-truck','Tango+ · Kamion','Autografikë','Brendimi i kamionit për Tango+.','A truck wrap for Tango+.','B4F5DHKlaZl'),
  project('acn','ACN','Reklama ndriçuese','Reklama ndriçuese për qendrën ACN.','Illuminated signage for the ACN centre.','B2EW3cpFAcw'),
  project('dukagjini-group','Dukagjini Group','Reklama 3D','Reklamë 3D nga inoksi për Dukagjini Group.','A stainless steel 3D sign for Dukagjini Group.','B0TQIcdl0r9'),
  project('sola-swiss','Sola · Marketet në Zvicër','Shtyp digjital','Brendimi i marketave në Zvicër për Sola.','Store branding in Switzerland for Sola.','BzAIDL_FBTj'),
  project('ipko-citylight','IPKO · City Light','Shtyp digjital','Shtypi i city light-it për IPKO.','City light print for IPKO.','BxUV5J4jiFe'),
  project('shala-swiss','Shala Swiss Oil','Reklama ndriçuese','Shenjë e lartë për Shala Swiss Oil: market, restorant, hotel dhe motel.','A tall pylon for Shala Swiss Oil: market, restaurant, hotel and motel.','BubJ6fwHLjS'),
  project('nora','Nora · Totem','Reklama 3D','Totem për Nora.','A totem for Nora.','BuV92pFH40d'),
  project('wolker','Mobileria Wolker · Billboard','Shtyp digjital','Billboard për Mobilerinë Wolker.','A billboard for the Wolker furniture store.','BuV9sGFHYwz'),
  project('froject','Froject Architecture','Reklama ndriçuese','Reklamë 3D nga inoksi me ndriçim indirekt për Froject Architecture.','A stainless steel 3D sign with indirect lighting for Froject Architecture.','BuV9hXWHvk0'),
  project('birra-prishtina','Birra Prishtina · Elnor','Reklama 3D','Reklamë për Birra Prishtina dhe Elnor Furniture.','A sign for Birra Prishtina and Elnor Furniture.','BuOQsQrHkLA'),
  project('eris','Mobileria Eris','Reklama 3D','Reklamë për Mobilerinë Eris.','A sign for the Eris furniture store.','BuLaMjjH_Bh'),
  project('emerald-hotel','Emerald Hotel','Reklama 3D','Reklamë për Emerald Hotel.','A sign for the Emerald Hotel.','BuGY97pH7AD'),
];
