import type { APIRoute } from 'astro';
import { site } from '../config/site';

// Generated so the domain stays defined in one place (src/config/site.ts).
// The demo site blocks everything; a real launch flips site.demo to false.
export const GET: APIRoute = () =>
  new Response(
    (site.demo
      ? ['User-agent: *', 'Disallow: /', '']
      : ['User-agent: *', 'Allow: /', 'Disallow: /thank-you', '', `Sitemap: ${site.url}/sitemap-index.xml`, '']
    ).join('\n'),
    { headers: { 'content-type': 'text/plain; charset=utf-8' } },
  );
