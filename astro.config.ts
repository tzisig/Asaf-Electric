// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site';

// The domain lives in src/config/site.ts only - this file follows it.
export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  // Inline the (small) stylesheet so it never blocks the first paint.
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // Utility pages are noindex and must stay out of the sitemap.
      filter: (page) => !/\/(thank-you|404)$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
