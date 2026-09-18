import type { Project } from '../lib/graph/types';

/**
 * Placeholder project data, used at build time until the real "Projects"
 * SharePoint list (see PLAN.md / README) is provisioned and
 * GRAPH_* environment variables are set — see src/lib/graph/projects.ts.
 *
 * Slugs deliberately match the legacy Odoo blog post slugs (ASCII-normalized)
 * so the 301 redirect map in staticwebapp.config.json lands on real pages.
 */
export const sampleProjects: Project[] = [
  {
    id: 'sample-kosgeb',
    contentType: 'Project',
    title: 'KOSGEB x Garaj Teknoloji Geliştirme Merkezi LED Video Wall Kurulumu',
    slug: 'kosgeb-x-garaj-teknoloji-gelistirme-merkezi-led-video-wall-kurulumu-7',
    client: 'KOSGEB',
    location: 'Ankara',
    categories: ['LED Video Wall'],
    publishDate: '2024-01-01',
    published: true,
    coverImage: '/references/placeholder-cover.svg',
    gallery: [],
    bodyTr:
      '<p>Bu içerik yer tutucudur. Gerçek proje metni, SharePoint "Projects" listesi Microsoft Graph API üzerinden bağlandığında buraya otomatik olarak gelecektir.</p>',
    facts: [
      { label: 'Müşteri', value: 'KOSGEB' },
      { label: 'Lokasyon', value: 'Ankara' },
      { label: 'Kapsam', value: 'LED Video Wall Kurulumu' },
    ],
    faq: [],
  },
  {
    id: 'sample-fuar',
    contentType: 'Project',
    title: 'Fuar Ekranları',
    slug: 'fuar-ekranlari-6',
    categories: ['LED Ekran'],
    publishDate: '2024-01-01',
    published: true,
    coverImage: '/references/placeholder-cover.svg',
    gallery: [],
    bodyTr:
      '<p>Bu içerik yer tutucudur. Gerçek proje metni, SharePoint "Projects" listesi Microsoft Graph API üzerinden bağlandığında buraya otomatik olarak gelecektir.</p>',
    facts: [],
    faq: [],
  },
  {
    id: 'sample-konferans',
    contentType: 'Project',
    title: 'Konferans Salonu',
    slug: 'konferans-salonu-5',
    categories: ['Konferans Sistemleri'],
    publishDate: '2024-01-01',
    published: true,
    coverImage: '/references/placeholder-cover.svg',
    gallery: [],
    bodyTr:
      '<p>Bu içerik yer tutucudur. Gerçek proje metni, SharePoint "Projects" listesi Microsoft Graph API üzerinden bağlandığında buraya otomatik olarak gelecektir.</p>',
    facts: [],
    faq: [],
  },
];
