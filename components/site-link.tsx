'use client';
import type {AnchorHTMLAttributes} from 'react';
import {useLanguage, localizedPath} from './site-shell';

/** Native document navigation avoids a production router prefetch fault.
 * It also preserves standard open-in-new-tab, download and hash behavior.
 * Cross-document view transitions are progressively enhanced in CSS.
 * Internal links follow the visitor's language, so English browsing stays under /en.
 */
export default function SiteLink({href, ...props}:AnchorHTMLAttributes<HTMLAnchorElement>){const{lang}=useLanguage();return <a {...props} href={href&&localizedPath(href,lang)}/>}
