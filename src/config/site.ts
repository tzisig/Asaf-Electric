/**
 * Single source of truth for every business detail that can change over time:
 * contact details, hours, license, service areas, experience.
 * Pages and components read from here and never type these values themselves.
 * scripts/check-single-source.mjs fails the build if one of them appears elsewhere.
 *
 * DEMO: this is a portfolio site for a fictional business. Every value marked
 * "demo" is invented and the site shows a demo banner while `demo` is true.
 */
export interface SiteConfig {
  /** Shows the demo banner and keeps the site out of search engines. */
  demo: boolean;
  name: string;
  ownerName: string;
  tagline: string;
  /** Production URL, no trailing slash. astro.config.ts and robots.txt read it from here. */
  url: string;
  locale: string;
  contact: {
    /** Display format, e.g. "050-000-0000". */
    phone: string;
    /** International format without "+", e.g. "972500000000". */
    whatsapp: string;
    email: string;
  };
  license: {
    /** Grade as written on the license. */
    grade: string;
    number: string;
    /** Inspector license held in addition to the electrician license. */
    inspectorGrade: string | null;
    inspectorNumber: string | null;
    /** Scope of work the grade allows, in plain words, for the trust section. */
    scope: string;
  };
  /** Public registry where anyone can verify a license. */
  licenseRegistryUrl: string;
  businessId: string;
  /** Year Asaf started working as an electrician. Years of experience are computed from it. */
  workingSince: number;
  hours: {
    /** Regular hours, one line per group of days. */
    regular: { days: string; time: string; /** schema.org day range, e.g. "Su-Th" */ schemaDays: string }[];
    /** Emergency availability, free text. */
    emergency: string;
    /** Short form for badges and titles, e.g. "24/7". */
    emergencyShort: string;
    /** Is there a surcharge outside regular hours. */
    afterHoursNote: string;
  };
  /** Base town the response time is measured from. */
  baseCity: string;
  /** Typical arrival time for an urgent call inside the service area. */
  emergencyResponse: string;
  /** Warranty on labor. */
  warranty: string;
  googleBusinessUrl: string | null;
  social: {
    facebook: string | null;
    instagram: string | null;
  };
}

export const site: SiteConfig = {
  demo: true,
  name: 'אסף לוין - חשמלאי מוסמך',
  ownerName: 'אסף לוין',
  tagline: 'חשמלאי מוסמך ובודק חשמל בגוש דן. תקלות דחופות, לוחות חשמל, תאורה ועמדות טעינה.',
  url: 'https://asaf-levin-electric.pages.dev',
  locale: 'he_IL',
  contact: {
    phone: '050-000-0000', // demo
    whatsapp: '972500000000', // demo
    email: 'asaf@example.com', // demo
  },
  license: {
    grade: 'חשמלאי מוסמך',
    number: '123456', // demo
    inspectorGrade: 'חשמלאי בודק סוג 1',
    inspectorNumber: '654321', // demo
    scope: 'כל עבודות החשמל בדירות, בבתים ובמשרדים, כולל תכנון, עד חיבור של 3X80 אמפר',
  },
  licenseRegistryUrl: 'https://www.gov.il/he/departments/topics/electricians-licensure/govil-landing-page',
  businessId: '000000000', // demo
  workingSince: 2011, // demo
  hours: {
    regular: [
      { days: 'א-ה', time: '07:30-19:00', schemaDays: 'Su-Th' },
      { days: 'ו וערבי חג', time: '07:30-13:00', schemaDays: 'Fr' },
    ],
    emergency: 'תקלות דחופות: 24 שעות ביממה, 7 ימים בשבוע',
    emergencyShort: '24/7',
    afterHoursNote: 'בלילה, בשבת ובחג יש תוספת לתעריף. המחיר נאמר בטלפון לפני שיוצאים.',
  },
  baseCity: 'רמת גן',
  emergencyResponse: 'עד 60 דקות', // demo
  warranty: '12 חודשי אחריות על העבודה', // demo
  googleBusinessUrl: null,
  social: {
    facebook: null,
    instagram: null,
  },
};

export const yearsOfExperience = () => new Date().getFullYear() - site.workingSince;

export const phoneHref = () => `tel:${site.contact.phone.replace(/[^\d+]/g, '')}`;

export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
