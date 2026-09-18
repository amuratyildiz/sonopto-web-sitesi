import { company } from '../../data/company';
import { SITE_URL } from './meta';
import type { Project } from '../graph/types';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
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
