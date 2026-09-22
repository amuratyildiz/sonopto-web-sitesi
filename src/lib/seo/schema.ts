import { company } from '../../data/company';
import { SITE_URL } from './meta';
import type { Project } from '../graph/types';

export function organizationSchema() {
  // sameAs is how search engines tie the social profiles to this organisation
  // entity; empty slots are dropped so an unfilled profile never ships.
  const sameAs = Object.values(company.social).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    ...(sameAs.length > 0 && { sameAs }),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: company.phone,
        email: company.email,
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: ['tr', 'en'],
      },
    ],
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.name,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.district,
      addressRegion: company.address.city,
      addressCountry: company.address.country,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/**
 * The signage product page.
 *
 * Deliberately `Service` rather than `Product` or `SoftwareApplication`: both of
 * those are rich-result types that Google requires `offers` or `aggregateRating`
 * on, and we publish neither. Licence pricing exists but is integrator pricing —
 * our own cost base — so it cannot go on the site, and inventing a rating is out
 * of the question. A recognised-but-incomplete entity would just accrue Search
 * Console warnings in exchange for a rich result that could never render.
 *
 * `provider` is also the structured-data half of the white label: the platform
 * is presented as ours, so the vendor appears nowhere in the graph.
 */
export function signageServiceSchema(input: {
  name: string;
  description: string;
  url: string;
  platformUrl: string;
  offerings: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: 'Digital signage',
    provider: {
      '@type': 'Organization',
      name: company.name,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: input.platformUrl,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: input.name,
      itemListElement: input.offerings.map((offering) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: offering },
      })),
    },
  };
}

export function articleSchema(project: Project, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    image: project.coverImage ? [new URL(project.coverImage, SITE_URL).toString()] : undefined,
    datePublished: project.publishDate,
    author: {
      '@type': 'Organization',
      name: company.name,
    },
    mainEntityOfPage: url,
  };
}
