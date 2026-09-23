// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sonopto.com',
  output: 'static',
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // The 404 is served under whatever URL was requested, so it is not a
      // destination and has no place in the sitemap.
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr',
          en: 'en',
        },
      },
    }),
  ],
});
