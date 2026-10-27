// Twenty more Instagram projects (2023–2024), retouched for the portfolio (lighting, colour, framing).
// No unedited originals were supplied, so `original` is left empty. Texts follow the post captions.
const dir='/assets/instagram/portfolio-2026/';
const project=(id:string,name:string,category:string,desc:string,descEn:string,post:string)=>{const image=dir+id+'-professional.webp';return{id,name,nameEn:name,category,image,original:'',desc,descEn,enhanced:true,photos:[image],originals:{} as Record<string,string>,source:'https://www.instagram.com/topreklama.ks/p/'+post+'/'}};
export const portfolio2024Projects=[
  project('go-plus','GO+ Energy Drink','Reklama ndriçuese','Reklamë 3D ndriçuese për GO+, me printim UV.','An illuminated 3D sign for GO+, with UV print.','DDFjSATu9qp'),
  project('kulla-zenel-beut','Kulla e Zenel Beut','Reklama ndriçuese','Reklamë ndriçuese nga pleksi 10 mm dhe mesingu për Kulla e Zenel Beut.','An illuminated sign in 10 mm plexiglass and brass for Kulla e Zenel Beut.','DDAejXXOJM6'),
  project('dr-agusholli','Klinika Dentare Dr. Agusholli','Reklama ndriçuese','Reklama inoksi me ndriçim nga pas, tabela orientuese dhe totem ndriçues për klinikën Dr. Agusholli.','Backlit stainless steel signs, wayfinding and an illuminated totem for the Dr. Agusholli clinic.','C4tZSIFIjX9'),
  project('elko-shpk','ELKO SHPK','Reklama ndriçuese','Reklama 3D me ndriçim për pikën e re të ELKO SHPK.','Illuminated 3D signs for the new ELKO SHPK store.','C4i_NN0op1c'),
  project('vita-lightbox','Vita · Light box 3D','Reklama ndriçuese','Light box 3D në formën e paketimit të qumështit Vita, në pika kyçe të qytetit.','A 3D light box shaped like a Vita milk carton, placed at key points in the city.','C4bNexAoCmA'),
  project('kolica-jewellery','Argjendaria Kolica','Reklama 3D','Reklamë 3D për fasadën e Argjendarisë Kolica.','A 3D facade sign for the Kolica jewellery shop.','C4TPjfroL-i'),
  project('grand-hotel-belushi','Grand Hotel Belushi','Reklama ndriçuese','Reklamë unike 3D me ndriçim, flamuj dhe infografika mirror gold në të gjithë hotelin.','A distinctive illuminated 3D sign, flags and mirror-gold signage throughout the hotel.','C4JWNc6IyP2'),
  project('aventa','Mobileria Aventa','Reklama 3D','Reklamë 3D dhe flamuj për Mobilerinë Aventa.','A 3D sign and flags for the Aventa furniture store.','C3-_9LKoPdt'),
  project('cisco','Cisco · Digital World · Pejë','Shtyp digjital','Brendimi dhe montimi i foljeve në xhama për Cisco Networking Academy në Pejë.','Branded window film, printed and fitted, for the Cisco Networking Academy in Pejë.','C32TYpFoCcY'),
  project('desuisse','deSuisse Luxury Jewellery','Reklama ndriçuese','Reklamë me ballinë inox gold dhe anësore pleksi: reflektim ditën, ndriçim i fortë natën.','A sign with gold stainless faces and plexiglass sides: reflective by day, brightly lit at night.','C3qZLxioC3U'),
  project('debat-plus','Debat Plus · RTV Dukagjini','Shtyp digjital','Studioja e emisionit Debat Plus e veshur e gjitha me grafikat tona.','The Debat Plus TV studio, dressed entirely in our graphics.','C3lTHJdIdNT'),
  project('kelmendi','Kelmendi GmbH','Reklama ndriçuese','Reklamë e jashtme 3D ndriçuese dhe reklamë e brendshme inox gold me ndriçim për Kelmendi.','An illuminated 3D exterior sign and a lit gold stainless interior sign for Kelmendi.','C3aoHeWoh4z'),
  project('start-gaming','Start Gaming','Reklama ndriçuese','Reklamë 3D ndriçuese dhe brendim i xhamave për gaming center-in Start Gaming.','An illuminated 3D sign and window branding for the Start Gaming centre.','C3Dtx3RIfog'),
  project('rtv-dukagjini','RTV Dukagjini','Reklama 3D','Simboli i RTV Dukagjini nga pleksiglas transparent me ngjyrë.','The RTV Dukagjini symbol in coloured transparent plexiglass.','C2vEHW4oJFY'),
  project('kubit','KUBIT','Reklama ndriçuese','Reklamë ndriçuese, brendim i xhamave dhe veshje muri në zyrat e KUBIT.','An illuminated sign, window branding and wall graphics in the KUBIT offices.','C1xb6v2ISsf'),
  project('ip-petrol','IP Petrol · Komoran','Reklama 3D','Reklamat për IP Petrol, HEB’S dhe IWASH në pikën e Komoranit.','Signage for IP Petrol, HEB’S and IWASH at the Komoran station.','C1fS0zHoq3w'),
  project('iwash','IWASH Self Service · Komoran','Reklama 3D','Brendimi dhe reklamat 3D për IWASH Self Service në Komoran.','Branding and 3D signs for IWASH Self Service in Komoran.','C1Xqs6lopIH'),
  project('vitaland','Vitaland Park','Reklama 3D','Reklama 3D, light box dhe brendim i xhamave për Vitaland Park në Central Park.','3D signs, light boxes and window branding for Vitaland Park in Central Park.','C04q8y_oONR'),
  project('central-park','Central Park','Reklama 3D','Reklama 3D, totem dhe brendim i xhamave për qendrën Central Park.','3D signs, a totem and window branding for the Central Park centre.','C0kIy0uoJBl'),
  project('lc-waikiki-festive','LC Waikiki · Festat','Shtyp digjital','Folje dekorative, dekore nga forexi dhe kuti dekorative për festat e fundvitit në LC Waikiki.','Festive decorative film, forex decorations and display boxes for LC Waikiki at year end.','DC4qI8Rud5w'),
];
