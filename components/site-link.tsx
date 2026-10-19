import type {AnchorHTMLAttributes} from 'react';

/** Native document navigation avoids a production router prefetch fault.
 * It also preserves standard open-in-new-tab, download and hash behavior.
 * Cross-document view transitions are progressively enhanced in CSS.
 */
export default function SiteLink(props:AnchorHTMLAttributes<HTMLAnchorElement>){return <a {...props}/>}
