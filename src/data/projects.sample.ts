import type { Project } from '../lib/dataverse/types';

/**
 * Placeholder project data, used at build time when the DATAVERSE_* variables
 * are unset — a local checkout with no credentials, or a Dataverse read that
 * failed (see src/lib/dataverse/projects.ts).
 *
 * Slugs deliberately match the legacy Odoo blog post slugs (ASCII-normalized)
 * so the 301 redirect map in staticwebapp.config.json lands on real pages.
 */
const PLACEHOLDER_BODY =
  '<p>Bu içerik yer tutucudur. Gerçek proje metni, Dataverse\'teki "Web Referansı" ' +
  'tablosu derlemeye bağlandığında buraya otomatik olarak gelecektir.</p>';

export const sampleProjects: Project[] = [
  {
    id: 'sample-kosgeb',
    title: 'KOSGEB x Garaj Teknoloji Geliştirme Merkezi LED Video Wall Kurulumu',
    slug: 'kosgeb-x-garaj-teknoloji-gelistirme-merkezi-led-video-wall-kurulumu-7',
    client: 'KOSGEB',
    location: 'Ankara',
    categories: ['led-video-wall'],
    clientType: 'kamu',
    publishDate: '2024-01-01',
    published: true,
    coverImage: '/references/placeholder-cover.svg',
    coverAlt: '',
    gallery: [],
    bodyTr: PLACEHOLDER_BODY,
    facts: [
      { label: 'Müşteri', value: 'KOSGEB' },
      { label: 'Lokasyon', value: 'Ankara' },
      { label: 'Kapsam', value: 'LED Video Wall Kurulumu' },
    ],
    faq: [],
    faqEn: [],
  },
  {
    id: 'sample-fuar',
    title: 'Fuar Ekranları',
    slug: 'fuar-ekranlari-6',
    categories: ['led-ekran'],
    publishDate: '2024-01-01',
    published: true,
    coverImage: '/references/placeholder-cover.svg',
    coverAlt: '',
    gallery: [],
    bodyTr: PLACEHOLDER_BODY,
    facts: [],
    faq: [],
    faqEn: [],
  },
  {
    id: 'sample-konferans',
    title: 'Konferans Salonu',
    slug: 'konferans-salonu-5',
    categories: ['konferans'],
    publishDate: '2024-01-01',
    published: true,
    coverImage: '/references/placeholder-cover.svg',
    coverAlt: '',
    gallery: [],
    bodyTr: PLACEHOLDER_BODY,
    facts: [],
    faq: [],
    faqEn: [],
  },
];
