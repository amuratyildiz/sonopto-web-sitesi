export interface Partner {
  name: string;
  logo: string;
  alt: string;
  website?: string;
}

/**
 * Fallback partner list, used when the "Partners" SharePoint list is not
 * reachable (GRAPH_* env vars unset — local dev). The live set is managed in
 * SharePoint; see src/lib/graph/partners.ts.
 *
 * Logo files are white wordmarks on a solid black background, which is why the
 * strip renders on the ink band — on a white section they would be invisible.
 */
export const partners: Partner[] = [
  { name: 'AMX', logo: '/partners/amx.webp', alt: 'AMX kontrol sistemleri logosu' },
  { name: 'Audio-Technica', logo: '/partners/audio-technica.webp', alt: 'Audio-Technica logosu' },
  { name: 'Audinate', logo: '/partners/audinate.webp', alt: 'Audinate Dante ses ağı logosu' },
  { name: 'Symetrix', logo: '/partners/symetrix.webp', alt: 'Symetrix ses işlemci logosu' },
  { name: 'EAW', logo: '/partners/eaw.webp', alt: 'Eastern Acoustic Works logosu' },
  { name: 'LEA Professional', logo: '/partners/lea.webp', alt: 'LEA Professional amplifikatör logosu' },
  { name: 'Optimal Audio', logo: '/partners/optimal-audio.webp', alt: 'Optimal Audio logosu' },
  { name: 'Montarbo', logo: '/partners/montarbo.webp', alt: 'Montarbo profesyonel ses logosu' },
  { name: 'RF Venue', logo: '/partners/rf-venue.webp', alt: 'RF Venue kablosuz anten sistemleri logosu' },
  { name: 'Lauten Audio', logo: '/partners/lauten-audio.webp', alt: 'Lauten Audio mikrofon logosu' },
];
