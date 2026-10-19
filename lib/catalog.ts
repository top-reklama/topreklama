export type ProductId = 'tshirt' | 'cap' | 'mug' | 'cards' | 'pens' | 'vehicle' | 'signage';
export const products = [
 {id:'tshirt',name:'Bluza të personalizuara',en:'Custom T-shirts',category:'Tekstil',image:'shirt-front.png',tag:'Personalizo online',desc:'Për ekipin, eventin ose idenë tuaj.',customizable:true,print:{width:30,height:35,x:.3,y:.29,w:.4,h:.46},sizes:['S','M','L','XL','XXL'],colors:['white','black','magenta']},
 {id:'cap',name:'Kapela me logon tuaj',en:'Custom caps',category:'Tekstil',image:'cap.png',tag:'Personalizo online',desc:'Një detaj i vogël. Një prani e dallueshme.',customizable:true,print:{width:10,height:5,x:.28,y:.33,w:.42,h:.21},sizes:['Universale'],colors:['white']},
 {id:'mug',name:'Gota të personalizuara',en:'Custom mugs',category:'Promocionale',image:'mug.png',tag:'Personalizo online',desc:'Një pjesë e përditshmërisë së klientit tuaj.',customizable:true,print:{width:9,height:9,x:.29,y:.32,w:.36,h:.36},sizes:['Standard'],colors:['white']},
 {id:'cards',name:'Kartëvizita',en:'Business cards',category:'Shtyp digjital',image:'merch-kit.png',tag:'Personalizo online',desc:'Prezantimi juaj, në çdo takim.',customizable:true,print:{width:8.5,height:5.5,x:.12,y:.26,w:.76,h:.49},sizes:['85 × 55 mm'],colors:['white']},
 {id:'pens',name:'Stilolapsa promocionalë',en:'Promotional pens',category:'Promocionale',image:'pen.png',tag:'Personalizo online',desc:'Reklama juaj në duart e duhura.',customizable:true,print:{width:5,height:1,x:.3,y:.455,w:.4,h:.08},sizes:['Standard'],colors:['white']},
 {id:'vehicle',name:'Autografikë',en:'Vehicle graphics',category:'Autografikë',image:'van-top.png',tag:'Prodhim & montim',desc:'Automjeti juaj, një reklamë në lëvizje.',customizable:false,print:{width:0,height:0,x:0,y:0,w:0,h:0},sizes:[],colors:[]},
 {id:'signage',name:'Reklama 3D & ndriçuese',en:'3D & illuminated signs',category:'Reklama',image:'sign-night.jpg',tag:'Sipas projektit',desc:'Reklama që shihen ditë e natë.',customizable:false,print:{width:0,height:0,x:0,y:0,w:0,h:0},sizes:[],colors:[]},
] as const;
export function getProduct(id:string){return products.find(p=>p.id===id)}
export const categories=['Të gjitha','Tekstil','Promocionale','Shtyp digjital','Autografikë','Reklama'];
export const services=[['01','Reklama ndriçuese','Shkronja me LED, kuti ndriçuese dhe zgjidhje për fasada.','sign-night.jpg'],['02','Reklama 3D','Shkronja, logo dhe forma me dimension.','heimerer.jpg'],['03','Autografikë','Mbështjellje të plota ose pjesore për automjete dhe flota.','van-top.png'],['04','Shtyp digjital','Formate të mëdha, folje dhe materiale për çdo sipërfaqe.','floor.jpg'],['05','Tekstil & promocionale','Bluza, kapela, stilolapsa dhe produkte me dizajnin tuaj.','merch-kit.png']];
export const cities=['Prishtinë','Pejë','Prizren','Mitrovicë','Gjilan','Gjakovë','Ferizaj'];

export const categoryEnglish:Record<string,string>={"Të gjitha":"All products",Tekstil:"Apparel",Promocionale:"Promotional", "Shtyp digjital":"Digital printing",Autografikë:"Vehicle graphics",Reklama:"Signage", "Reklama 3D":"3D signage", "Reklama ndriçuese":"Illuminated signage",Display:"Display"};
export const serviceEnglish:Record<string,[string,string]>={
 '01':['Illuminated signage','LED letters, light boxes and solutions for facades.'],
 '02':['3D signage','Dimensional letters, logos and forms.'],
 '03':['Vehicle graphics','Full or partial wraps for vehicles and fleets.'],
 '04':['Digital printing','Large formats, films and graphics for every surface.'],
 '05':['Apparel & promotional','T-shirts, caps, pens and products with your design.']};
