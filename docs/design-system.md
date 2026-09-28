# Design system - Asaf Levin Electric

## Concept: "the panel"

The site borrows from the thing an electrician trusts most: a well-labeled electrical panel.
- Section labels look like printed breaker labels (`L1`, `F02`), via `.circuit-label[data-code]`.
- Service cards carry a breaker code and a toggle that flips on hover/focus.
- A thin yellow "live wire" (`.wire`) with a traveling pulse separates dark sections.
- Dark sections use a faint engineering grid (`.grid-bg`).
- The license is shown like the physical card (`LicenseCard.astro`), because in this trade the
  license is the main trust signal.

Tone: serious, safe, calm under pressure. Yellow is used for action and emphasis only, never
as body text on light backgrounds (contrast).

## Color tokens (`src/styles/global.css`)

| Token | Hex | Use |
|---|---|---|
| night | #0b1b2e | Dark sections, heroes, footer |
| night-2 / night-3 | #12304f / #1b4270 | Cards on dark |
| ink / ink-soft | #0f1d2e / #3d4f66 | Text on light |
| blue / blue-dark | #1a56c4 / #123f94 | Links, primary form button |
| volt / volt-dark / volt-soft | #ffc928 / #e0a800 / #fff5d1 | Call button, highlights, demo tags |
| danger / danger-dark / danger-soft | #b42318 / #8f1b12 / #fdecea | Emergency strip and page |
| wa | #25d366 | WhatsApp button (dark text) |
| paper / surface / line | #f5f7fa / #ffffff / #d8e0ea | Backgrounds and borders |

All text pairs pass WCAG AA (verified with axe-core).

## Typography

Heebo Variable (OFL, self-hosted via @fontsource, Hebrew subset preloaded).
Headings 800, body 400 at 17px / 1.65. Numbers (phone, license, prices) use `.ltr`
(isolated LTR + tabular figures) so they never flip inside Hebrew text.

## Conversion layout

- Red emergency strip, sticky with the header, on every page: availability + phone.
- Mobile: fixed bottom bar with Call + WhatsApp (safe-area aware).
- Every page ends with the CTA band (big phone number + both buttons).
- The form is a fallback: minimal fields, the page always says "urgent? call".

## Motion

Only: the wire pulse, card hover lift, breaker toggle, and a one-time 12px fade-up reveal.
All of it is disabled under `prefers-reduced-motion`, and content is visible without JS.
