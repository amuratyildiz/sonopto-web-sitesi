/** Verified from the live sonopto.com contact page — keep in sync if these change. */
export const company = {
  name: 'Sonopto',
  legalName: 'Sonopto',
  email: 'info@sonopto.com',
  phone: '+90 850 302 81 26',
  address: {
    street: 'Cevizlidere Mahallesi 1243 Sokak 4/A Palmiye İş Merkezi',
    district: 'Çankaya',
    city: 'Ankara',
    country: 'TR',
    countryName: 'Türkiye',
  },
  /**
   * WhatsApp lines behind the floating widget. `wa` is the wa.me form — digits
   * only, no plus or spaces; `display` is what the visitor reads.
   */
  whatsapp: [
    { key: 'sales', wa: '905323752864', display: '+90 532 375 28 64' },
    { key: 'support', wa: '905303055162', display: '+90 530 305 51 62' },
    { key: 'installation', wa: '905469631601', display: '+90 546 963 16 01' },
  ],
  social: {
    // TODO: confirm current social profile URLs with the client before launch.
    linkedin: '',
    instagram: '',
  },
} as const;
