# Asaf Levin - licensed electrician (portfolio demo)

Marketing site for a fictional licensed electrician in Gush Dan. Built as if the
business were real; every invented value is marked `// demo` in the config and
the site shows a demo banner while `site.demo` is `true`.

Astro 7 (static), Tailwind v4, Hebrew RTL, Cloudflare Pages + one Pages Function for the form.

## Commands

```bash
npm run dev      # local dev server
npm run build    # single-source check + astro check + build + dist check
npm run preview  # serve dist/
```

`npm run build` fails if:
- a phone number, email, license number, business id, hours or price is typed outside
  `src/config/` (`scripts/check-single-source.mjs`);
- a TypeScript/Astro error exists (`astro check`);
- a built page has a broken internal link, invalid JSON-LD, not exactly one H1, or a
  missing/odd-length description (`scripts/check-dist.mjs`).

## Where things live

| Path | What |
|---|---|
| `src/config/site.ts` | Every business detail that can change: contact, license, hours, years, areas base, warranty, `demo` flag. |
| `src/config/pricing.ts` | "From" prices, VAT included. |
| `src/config/analytics.ts` | GA4 / Meta IDs. Nothing loads, and no consent banner shows, while they are `null`. |
| `src/data/services.ts` | Service pages: copy, signs, steps, FAQs, sources, price keys. |
| `src/data/areas.ts` | City pages, each with local content that does not fit another city. |
| `src/data/content.ts` | Sample testimonials (tagged), gallery items, general FAQ. |
| `src/data/images.ts` | Image registry with alt text and the CC0 source page of every photo. |
| `docs/seo-research.md` | Competitors, verified licensing facts, price benchmarks, keyword-to-URL map. |
| `docs/design-system.md` | Colors, type, components and the visual concept. |
| `design/og-template.html` | Source of `public/og-image.jpg` (screenshot at 1200x630). |
| `functions/api/contact.ts` | Form endpoint: honeypot, Turnstile, SMTP mail + Google Sheets row. |
| `scripts/sheets-webhook.gs` | Apps Script that appends a lead to a sheet. |

## Turning the demo into a real site

1. `src/config/site.ts`: real phone, WhatsApp, email, license numbers, business id,
   `workingSince`, hours, response time, warranty, domain (`url`), then `demo: false`.
2. `src/config/pricing.ts`: the client's own prices (VAT included).
3. `src/data/content.ts`: real testimonials with written consent (`sample: false`),
   real project photos in the gallery.
4. `src/pages/about.astro`: the real story and a real photo of the owner.
5. `public/_headers`: remove `X-Robots-Tag`; add HSTS once the domain is attached.
6. Cloudflare Pages: set the variables in `.env.example`; deploy the Apps Script.
7. Legal pages are drafts: a lawyer approves them before launch.
8. `src/config/analytics.ts`: add GA4 ID; the consent banner appears automatically.

## Quality results (last run)

- axe-core (WCAG 2.1 A/AA + best practices): 0 violations on all 25 pages, desktop and mobile.
- Lighthouse mobile: Performance 100, Accessibility 100, Best Practices 100.
  SEO is 100 with `demo: false`; with the demo on it is lower only because of the intentional noindex.
