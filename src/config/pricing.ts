/**
 * "From" prices. Always the full price a consumer pays, VAT included (consumer protection law).
 *
 * DEMO: derived from the market ranges in docs/seo-research.md section 3,
 * rounded, VAT added where the source quoted prices without it.
 * A real client replaces these with their own prices.
 */
export const VAT_NOTE = 'המחירים כוללים מע"מ';

export interface PriceItem {
  id: string;
  label: string;
  /** Lowest price in NIS, VAT included. null = quote only. */
  from: number | null;
  note?: string;
}

export const prices: Record<string, PriceItem> = {
  visit: { id: 'visit', label: 'ביקור ואבחון תקלה', from: 295, note: 'מקוזז מהמחיר אם מבצעים את התיקון באותו ביקור' },
  groundingTest: { id: 'groundingTest', label: 'בדיקת הארקה ומפסק פחת', from: 390 },
  apartmentInspection: { id: 'apartmentInspection', label: 'בדיקת חשמל לדירה (עד 5 חדרים)', from: 950, note: 'כולל דוח בכתב' },
  panelReplacement: { id: 'panelReplacement', label: 'החלפת לוח חשמל חד-פאזי', from: 1420, note: 'המחיר הסופי תלוי במספר המעגלים ובמצב החיווט' },
  evInstall: { id: 'evInstall', label: 'התקנת עמדת טעינה (עבודה, בית פרטי)', from: 2500, note: 'לא כולל את העמדה עצמה. מרחק מהלוח וחציבות משנים את המחיר' },
  lighting: { id: 'lighting', label: 'התקנת תאורה', from: null, note: 'לפי כמות הנקודות וסוג התאורה' },
};

export const formatPrice = (item: PriceItem) =>
  item.from === null ? 'לפי הצעת מחיר' : `החל מ-${item.from.toLocaleString('he-IL')} ₪`;
