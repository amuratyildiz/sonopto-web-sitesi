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
      // destination and has no place in the sitemap. The search pages are
      // noindex — listing a page we ask not to be indexed is a contradiction.
      filter: (page) => !page.includes('/404') && !/\/(arama|search)\/$/.test(page),
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
