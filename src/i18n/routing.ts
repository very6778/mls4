import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  // Extend pathnames when dedicated pages are added
  pathnames: {
    '/': '/',
    '/blog/[slug]': '/blog/[slug]'
  }
});
