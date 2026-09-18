export interface Partner {
  name: string;
  logo: string;
  alt: string;
}

/**
 * Partner/brand logos shown on the homepage.
 * TODO: replace names with the full, confirmed current partner list and
 * supply real logo files under /public/partners/ (seen on the live site:
 * AMX, Audio-Technica, Martin, among others — confirm the complete set).
 */
export const partners: Partner[] = [
  { name: 'AMX', logo: '/partners/amx.svg', alt: 'AMX logo' },
  { name: 'Audio-Technica', logo: '/partners/audio-technica.svg', alt: 'Audio-Technica logo' },
  { name: 'Martin', logo: '/partners/martin.svg', alt: 'Martin Professional logo' },
];
