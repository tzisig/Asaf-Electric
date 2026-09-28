import type { ImageKey } from './images';
import type { Faq } from './services';

/**
 * Sample testimonials. They are NOT real reviews: every card carries a visible
 * "sample" tag, and no rating or review count is shown or put in the schema.
 * A real client replaces them with real reviews (with written consent) and sets `sample: false`.
 */
export interface Testimonial {
  name: string;
  city: string;
  service: string;
  text: string;
  sample: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'מיכל ר.',
    city: 'רמת גן',
    service: 'תיקון תקלה',
    text: 'מפסק הפחת קפץ בעשר בלילה ולא הצלחנו להרים אותו. אסףשאל בטלפון כמה שאלות, אמר לנו לנתק את הדוד, והגיע תוך פחות משעה. התברר שזה גוף החימום. הסביר הכל ואמר את המחיר לפני שהתחיל.',
    sample: true,
  },
  {
    name: 'יואב ש.',
    city: 'קריית אונו',
    service: 'עמדת טעינה',
    text: 'רצינו עמדה של 11 קילוואט ואסףאמר שבחיבור שלנו זה לא הגיוני, והמליץ על עמדה עם ניהול עומסים. חסך לנו הגדלת חיבור. העבודה נגמרה בצהריים והכבל עבר בצורה מאוד נקייה.',
    sample: true,
  },
  {
    name: 'רונית ל.',
    city: 'גבעתיים',
    service: 'החלפת לוח',
    text: 'היה לנו לוח עם פקקים מהשנים של ההורים. אסףהחליף ללוח חדש עם מפסק פחת, סימן כל מעגל, ועכשיו סוף סוף ברור מה שייך לאיזה חדר. עבודה של יום אחד, בדיוק כמו שאמר.',
    sample: true,
  },
  {
    name: 'דוד כ.',
    city: 'תל אביב',
    service: 'בדיקת חשמל',
    text: 'הזמנו בדיקה לפני שקנינו דירה ישנה. קיבלנו דוח ברור עם מה דחוף ומה יכול לחכות, והשתמשנו בו במשא ומתן על המחיר.',
    sample: true,
  },
];

/** Gallery items. Stock photos illustrating job types, labeled as such on the page. */
export interface GalleryItem {
  image: ImageKey;
  title: string;
  text: string;
  service: string;
}

export const gallery: GalleryItem[] = [
  { image: 'panelCabinet', title: 'לוח חשמל ביתי', text: 'לוח מסודר עם מפסק פחת, מפסקים ממוספרים ומקום פנוי להרחבה.', service: 'electrical-panels' },
  { image: 'breakersRow', title: 'שורת מפסקים', text: 'כל מעגל מסומן בשם החדר או המכשיר, כך שבתקלה יודעים מה לכבות.', service: 'electrical-panels' },
  { image: 'panelModern', title: 'לוח עם שעון שבת', text: 'שעון שבת ומגען בלוח, לשליטה במעגלי תאורה ומיזוג.', service: 'electrical-panels' },
  { image: 'evHome', title: 'טעינה בחניה פרטית', text: 'מעגל ייעודי מהלוח לחניה, עם הגנת פחת מתאימה לעמדת טעינה.', service: 'ev-chargers' },
  { image: 'evPlug', title: 'עמדת טעינה ביתית', text: 'בחירת הספק לפי החיבור בבית ולפי השימוש ברכב.', service: 'ev-chargers' },
  { image: 'kitchenLed', title: 'תאורת לד במטבח', text: 'פסי לד מתחת לארונות, עם ספק כוח נגיש ומפסק נפרד.', service: 'lighting' },
  { image: 'pendantLights', title: 'גופי תאורה תלויים', text: 'תליה בגבהים שונים מעל אי או שולחן, על קופסה שמחזיקה את המשקל.', service: 'lighting' },
  { image: 'insulationTester', title: 'בדיקת בידוד והארקה', text: 'מדידה של התנגדות הבידוד וההארקה כחלק מבדיקת חשמל לדירה.', service: 'safety-inspections' },
  { image: 'oldWiring', title: 'חיווט ישן שדורש החלפה', text: 'חוטים חשופים וקופסאות פתוחות הם סיבה לבדיקה, לא לדחייה.', service: 'electrical-repairs' },
];

/** General FAQ for /faq. Service and city FAQs stay on their own pages. */
export const generalFaqs: { group: string; items: Faq[] }[] = [
  {
    group: 'רישיון ובטיחות',
    items: [
      {
        q: 'איך בודקים שחשמלאי באמת מוסמך?',
        a: 'מבקשים את מספר הרישיון ואת הדרגה, ובודקים אותם מול משרד העבודה, שאחראי על רישוי חשמלאים. מספר הרישיון של אסףמופיע בכל עמוד באתר.',
      },
      {
        q: 'מה חשמלאי מוסמך רשאי לעשות?',
        a: 'לפי תקנות החשמל, חשמלאי מוסמך רשאי לבצע ולתכנן את כל עבודות החשמל במתקן במתח נמוך עד חיבור של 3X80 אמפר. זה מכסה את רוב הדירות, הבתים והמשרדים.',
      },
      {
        q: 'אותו חשמלאי יכול גם לבצע וגם לבדוק?',
        a: 'לא. בודק חשמל לא רשאי לבדוק מתקן שהוא עצמו תכנן או ביצע. כשאסףמבצע עבודה שדורשת בדיקה, הוא מתאם בודק אחר.',
      },
    ],
  },
  {
    group: 'מחירים ותשלום',
    items: [
      {
        q: 'המחירים באתר כוללים מע"מ?',
        a: 'כן. כל המחירים באתר הם המחיר הסופי לצרכן, כולל מע"מ.',
      },
      {
        q: 'יש תוספת בלילה, בשבת ובחג?',
        a: 'כן. התוספת נאמרת בטלפון לפני שיוצאים אליכם, כך שאתם מחליטים לפני שיש עלות.',
      },
      {
        q: 'מתי יודעים את המחיר הסופי?',
        a: 'אחרי האבחון, ולפני שמתחילים לעבוד. אם בזמן העבודה מתגלה משהו שמשנה את המחיר, עוצרים ומדברים איתכם קודם.',
      },
    ],
  },
  {
    group: 'זמינות והגעה',
    items: [
      {
        q: 'לאילו אזורים אתם מגיעים?',
        a: 'רמת גן, גבעתיים, בני ברק, תל אביב (בעיקר מזרח ומרכז) וקריית אונו. לאזורים אחרים אפשר לבדוק בטלפון.',
      },
      {
        q: 'מה עושים עד שהחשמלאי מגיע?',
        a: 'אם יש ריח שרוף, עשן, ניצוצות או חוטים חשופים: מורידים את המפסק הראשי בלוח ולא נוגעים במקור התקלה. בעמוד החירום יש את כל הצעדים.',
      },
    ],
  },
];
