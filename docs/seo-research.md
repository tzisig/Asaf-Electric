# SEO and market research - Asaf Levin, electrician

Date: 2026-09-26. Demo client for the portfolio; the site is built as if the business were real.
Search volumes were NOT measured (no keyword tool available). Validate priorities in a keyword tool before launch.

## 1. Competitors reviewed

| Site | What works | Gaps we exploit |
|---|---|---|
| alex380volt.co.il (Givatayim page) | License number shown and linked, 23 years, price ranges, 8-question FAQ, nearby towns | No reviews, no real project photos, no response-time commitment |
| sigmabs.co.il (Ramat Gan page) | Named owner, 30+ years, local streets (Bialik, Krinitsi), physical address | No prices, no FAQ, no reviews, cluttered menu mixing intercom/cameras |
| electplus.co.il (portal, Ramat Gan) | Full price table (excl. VAT), 30+ reviews, FAQ, warranty | Portal, not a person; repeated forms; generic local content |
| moti4you.co.il, mdw.co.il, hashmal4u.co.il | City pages at scale, 24/7 messaging | Thin, near-duplicate city pages; few trust signals |

Patterns across the market:
- The license is claimed ("חשמלאי מוסמך") but the number is rarely shown. Showing the number, the grade AND the inspector license, with a link to the official registry, is a clear differentiator.
- Almost nobody tells the visitor what to do during a real emergency before the electrician arrives. An emergency page with safety steps is both useful and linkable.
- Prices, when shown, are usually excluding VAT. Consumer law requires the full price; we show prices including VAT.
- City pages are mostly templated. Ours must carry content that cannot be copied to another city (building stock, typical faults, parking/EV context).

## 2. Licensing facts used in copy (verified)

- Electricity Regulations (Licenses), 1985, reg. 13: a "חשמלאי מוסמך" may perform all electrical work, including planning, in a low-voltage installation up to 3x80A. Source: https://www.nevo.co.il/law_html/law01/159_015.htm
- Same regulations, reg. 23: "חשמלאי בודק סוג 1" may inspect low-voltage installations up to 3x80A, not installations the inspector designed or executed. Source: same.
- Licensing authority: Ministry of Labor, electricians licensing department. Source: https://www.gov.il/he/departments/topics/electricians-licensure/govil-landing-page
- EV charger installation must be done by a licensed electrician (market sources, e.g. evenergy.co.il).

Copy rule that follows: Asaf never inspects and certifies his own installation. When he installed it, a separate inspector is needed, and the site says so.

## 3. Price benchmarks (market, September 2026)

| Item | Market range | Source |
|---|---|---|
| Visit / diagnosis | 200-300 NIS excl. VAT | electplus.co.il Ramat Gan page |
| Single-phase panel replacement | 1,200-1,500 NIS excl. VAT | electplus.co.il |
| Grounding test | 300-450 NIS excl. VAT; avg ~378 incl. visit | electplus.co.il, pro.co.il |
| Apartment inspection 4-5 rooms | 800-1,000 NIS | midrag.co.il |
| EV charger installation (labor, private house) | 2,500-5,500 NIS | evenergy.co.il |
| EV charger unit | 900-2,500 NIS | evenergy.co.il |

Demo "from" prices in `src/config/pricing.ts` are derived from these ranges, rounded, VAT included, and marked as demo values.

## 4. Keyword to URL map

One primary keyword per URL. No two URLs target the same primary keyword.

| URL | Primary keyword | Intent | Secondary |
|---|---|---|---|
| / | חשמלאי מוסמך בגוש דן | local / transactional | חשמלאי זמין, חשמלאי 24/7 |
| /services | שירותי חשמלאי | navigational | עבודות חשמל לבית |
| /services/electrical-repairs | תיקון תקלות חשמל | transactional / urgent | קצר חשמלי, מפסק פחת קופץ, שקע לא עובד |
| /services/electrical-panels | החלפת לוח חשמל | transactional | שדרוג לוח חשמל, הגדלת חיבור, לוח חשמל ישן |
| /services/lighting | התקנת תאורה | transactional | תאורת לד, תאורה חכמה, התקנת גוף תאורה |
| /services/ev-chargers | התקנת עמדת טעינה לרכב חשמלי | transactional / research | עמדת טעינה בבית משותף, מחיר התקנת עמדת טעינה |
| /services/safety-inspections | בדיקת חשמל לדירה | transactional | בודק חשמל, בדיקת הארקה, בדיקת לוח חשמל |
| /areas | אזורי שירות חשמלאי | navigational | |
| /areas/ramat-gan | חשמלאי ברמת גן | local | חשמלאי מוסמך ברמת גן |
| /areas/givatayim | חשמלאי בגבעתיים | local | חשמלאי 24/7 בגבעתיים |
| /areas/bnei-brak | חשמלאי בבני ברק | local | |
| /areas/tel-aviv | חשמלאי בתל אביב | local | |
| /areas/kiryat-ono | חשמלאי בקריית אונו | local | |
| /emergency | חשמלאי חירום | urgent | ריח שרוף מהשקע, הפסקת חשמל רק אצלי |
| /faq | שאלות על עבודות חשמל | informational | |
| /about | אסף לוין חשמלאי | brand | |

## 5. Questions and objections collected (feed FAQ and service pages)

- Why does the RCD (מפסק פחת) keep tripping? Is it dangerous?
- Power is out only in my apartment - what do I check first?
- Burning smell / hot socket - what now?
- How do I know the electrician is really licensed? (official registry lookup)
- Can the same electrician install and inspect? (no - reg. 23)
- Do I need the building committee's approval for an EV charger in a shared building?
- 1-phase vs 3-phase for an EV charger; do I need to enlarge the connection?
- Is there a surcharge at night / Shabbat? (yes, stated clearly)
- Is the price including VAT? (always, on this site)
- Warranty on work?

## 6. Pages to request indexing for (at launch)

/, /services/ev-chargers, /services/electrical-panels, /services/electrical-repairs, /emergency, /areas/ramat-gan, /areas/givatayim.
