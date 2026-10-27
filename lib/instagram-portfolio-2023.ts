// Twenty more Instagram projects (2023), retouched for the portfolio (lighting, colour, framing).
// No unedited originals were supplied, so `original` is left empty. Texts follow the post captions.
const dir='/assets/instagram/portfolio-2026/';
const project=(id:string,name:string,category:string,desc:string,descEn:string,post:string)=>{const image=dir+id+'-professional.webp';return{id,name,nameEn:name,category,image,original:'',desc,descEn,enhanced:true,photos:[image],originals:{} as Record<string,string>,source:'https://www.instagram.com/topreklama.ks/p/'+post+'/'}};
export const portfolio2023Projects=[
  project('optika-alfa','Alfa Optika · American Retail Park','Reklama 3D','Reklamë 3D dhe brendim i kutive për Alfa Optika në American Retail Park.','A 3D sign and branded boxes for Alfa Optika at American Retail Park.','CwQZQLioOLE'),
  project('optika-kubati','Optika Kubati · American Retail Park','Reklama 3D','Reklamë 3D dhe brendim i mureve e xhamave për Optika Kubati në American Retail Park.','A 3D sign and wall and window branding for Optika Kubati at American Retail Park.','CwGQX4YIdAH'),
  project('prince-display','Prince Caffe · Raft në Interex','Display','Rafti i ri i Prince Caffe për dyqanet Interex.','The new Prince Caffe display stand for Interex stores.','CwBDVJhI0L_'),
  project('comodita-wrap','Comodita Home · Veturë','Autografikë','Brendim i veturës me elementet e lojës shpërblyese të Comodita Home.','A car branded with the Comodita Home giveaway campaign.','Cv752iIIiXA'),
  project('suna-sport','Suna Sport','Reklama 3D','Reklamë 3D dhe brendim i hapësirave të brendshme për Suna Sport.','A 3D sign and interior branding for Suna Sport.','CvvBtCFoGo9'),
  project('modern-mill','Modern-Mill','Reklama ndriçuese','Shkronja 3D me ndriçim për Modern-Mill, kompani e punimeve nga druri.','Illuminated 3D letters for Modern-Mill, a woodworking company.','Cvp4LWqob3x'),
  project('petrol-be-happy','Petrol Company · Be Happy','Reklama ndriçuese','Shenjë e lartë ndriçuese për Petrol Company dhe Be Happy Restaurant.','A tall illuminated sign for Petrol Company and Be Happy Restaurant.','CvIZweuIwNj'),
  project('lochky','Lochky · Rruga B','Reklama 3D','Reklamë 3D për dyqanin Lochky në Rrugën B.','A 3D sign for the Lochky store on Rruga B.','Cu2f2RxI62J'),
  project('devolli-wrap','Sola · Devolli Group','Autografikë','Brendim i automjetit për Devolli Group me grafikën e Sola.','A vehicle wrap for Devolli Group in the Sola design.','CuxNKyEIBZo'),
  project('allzone-totem','ALLZONE · Totem','Reklama ndriçuese','Totem ndriçues për kompaninë ALLZONE.','An illuminated totem for ALLZONE.','CuaEFpwofUJ'),
  project('tecol','Tecol','Reklama ndriçuese','Reklamë në fasadë dhe totem për Tecol.','A facade sign and a totem for Tecol.','CuU2b52oVM3'),
  project('fivestar-fitness','Fivestar Fitness','Shtyp digjital','Grafikë murale për palestrën Fivestar Fitness.','Wall graphics for the Fivestar Fitness gym.','CuPwRnioyeP'),
  project('erc-trade','ERC Trade','Reklama 3D','Reklamë 3D në fasadë për ERC Trade.','A 3D facade sign for ERC Trade.','CuIIyaWoVku'),
  project('kujtesa','Kujtesa','Reklama 3D','Reklamë 3D dhe brendim i dyqanit për Kujtesa.','A 3D sign and store branding for Kujtesa.','CuATnByobXr'),
  project('seraphine-plaza','Séraphine Plaza','Reklama ndriçuese','Reklamë ndriçuese për hotelin Séraphine Plaza.','An illuminated sign for the Séraphine Plaza hotel.','Ctrw_15Iii-'),
  project('hotel-benelux','Hotel Benelux','Reklama 3D','Reklama 3D në fasadën e Hotel Benelux.','3D signs on the facade of Hotel Benelux.','Cte1T_bokf6'),
  project('hotel-troja','Hotel Troja','Reklama 3D','Reklama 3D për Hotel Troja.','3D signs for Hotel Troja.','CtR9jNhI1u5'),
  project('sharaz','Sharaz · Totem','Reklama ndriçuese','Totem për Sharaz Hall: evente, restorant dhe hotel.','A totem for Sharaz Hall: events, restaurant and hotel.','CtMzuknIr1p'),
  project('birra-peja-citybox','Birra Peja · City Box','Shtyp digjital','City box ndriçues për Birra Peja në Central Park.','An illuminated city box for Birra Peja at Central Park.','Cwf5SgPI7sq'),
  project('unicron-totem','Unicron · Totem','Reklama 3D','Totem unik për Unicron.','A distinctive totem for Unicron.','Cv0LUCBojN8'),
];
