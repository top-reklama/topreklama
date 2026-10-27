// Where Top Reklama is, from the "Distributorët" page of the previous site (top-reklama.com).
// Production happens in Prishtinë and Pejë; the other cities are served by phone.
// Old numbers used Kosovo's pre-2017 codes (+377, +386, +381); they are written here with +383.
export type Place={factory?:{address:string;addressEn:string};phones:string[]};
export const factories=['Prishtinë','Pejë'];
export const places:Record<string,Place>={
  'Prishtinë':{factory:{address:'Rr. Bajram Kelmendi, Qendra e biznesit “DODONA”, nr. 35',addressEn:'Rr. Bajram Kelmendi, “DODONA” business centre, no. 35'},phones:['+383 45 663 445','+383 38 775 775']},
  'Pejë':{factory:{address:'Fusha e Pejës p.n., 30000 Pejë',addressEn:'Fusha e Pejës n.n., 30000 Pejë'},phones:['+383 38 775 775','+383 45 519 415']},
  'Prizren':{phones:['+383 38 775 775','+383 45 519 415']},
  'Mitrovicë':{phones:['+383 45 519 415','+383 38 775 775']},
  'Gjilan':{phones:['+383 45 519 415','+383 38 775 775']},
  'Gjakovë':{phones:['+383 38 775 775','+383 45 519 415']},
  'Ferizaj':{phones:['+383 45 519 415','+383 38 775 775']},
};
export const tel=(n:string)=>'tel:'+n.replace(/\s/g,'');
