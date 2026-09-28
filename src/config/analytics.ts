/**
 * Measurement IDs. Everything is null until the accounts exist, and nothing
 * loads while an ID is null - so no third-party script runs by accident.
 * Tags load only after the visitor accepts the matching consent category.
 */
export const analytics = {
  /** GA4 measurement ID, e.g. "G-XXXXXXX". */
  ga4Id: null as string | null,
  metaPixelId: null as string | null,
};

/** GA4 key events. Kept here so the names stay identical across the site. */
export const keyEvents = {
  lead: 'generate_lead',
  whatsapp: 'whatsapp_click',
  phone: 'phone_click',
} as const;
