import type { Faq } from './services';
import { site } from '../config/site';

/** JSON-LD helpers. The Electrician entity itself is emitted by Seo.astro on every page. */
export const faqSchema = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (trail: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: new URL(t.href, site.url).href,
  })),
});

export const serviceSchema = (name: string, description: string, href: string, areaNames: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: new URL(href, site.url).href,
  provider: { '@id': `${site.url}/#business` },
  areaServed: areaNames.map((n) => ({ '@type': 'City', name: n })),
});
