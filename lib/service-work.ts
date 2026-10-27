import{archiveProjects,type Project}from'./all-projects';
// Each service opens with our own branded example, then the real client work that belongs to it.
export const serviceSlugs=['ndricuese','3d','autografike','shtyp','billborde','promocionale'] as const;
export type ServiceSlug=typeof serviceSlugs[number];
export const serviceBrand:Record<ServiceSlug,string>={ndricuese:'service-illuminated.webp','3d':'service-signage.webp',autografike:'van-top.webp',shtyp:'service-print-applied.webp',billborde:'service-billboard-branded.webp',promocionale:'merch-kit.webp'};
const billboards=['peja-billboards','sola-billboard','aquavita-banner'];
const belongs:Record<ServiceSlug,(p:Project)=>boolean>={
  ndricuese:p=>p.category==='Reklama ndriçuese',
  '3d':p=>p.category==='Reklama 3D',
  autografike:p=>p.category==='Autografikë',
  // Display pieces (blade signs, brochure holders) are not printing work, so they stay out of this list.
  shtyp:p=>p.category==='Shtyp digjital'&&!billboards.includes(p.id),
  billborde:p=>billboards.includes(p.id),
  // The printed flags are not apparel work; this fills in as textile and promotional projects are added.
  promocionale:p=>p.category==='Tekstil & promocionale'&&p.id!=='printed-flags',
};
export const serviceProjects=(slug:ServiceSlug)=>archiveProjects.filter(belongs[slug]);
export const projectImage=(src:string)=>src.startsWith('/')?src:'/assets/'+src;
