/**
 * Image registry. Files live in public/images as <id>-<width>.webp.
 * Every image is CC0 / public domain (no attribution required); the source
 * page is kept here so the license can be re-checked at any time.
 * These are stock photos, not Asaf's own work: alt text describes what is
 * shown and never claims it is a project of this business.
 */
export interface SiteImage {
  id: string;
  alt: string;
  widths: number[];
  /** width / height */
  ratio: number;
  source: string;
  license: 'CC0';
}

const img = (id: string, alt: string, widths: number[], ratio: number, source: string): SiteImage => ({
  id,
  alt,
  widths,
  ratio,
  source,
  license: 'CC0',
});

export const images = {
  heroPanel: img('hero-panel', 'חשמלאי עובד מול לוח חשמל פתוח', [480, 720, 960], 1.5, 'https://stocksnap.io/photo/electrician-electricity-3A5FXM89OG'),
  socketInstall: img('socket-install', 'חשמלאי מתקין שקע בקיר', [480, 720, 960], 1.5, 'https://stocksnap.io/photo/electrician-electricity-QJ55PI34SY'),
  panelCloseup: img('panel-closeup', 'עבודה על מפסקים בתוך לוח חשמל', [480, 720, 960], 0.665, 'https://stocksnap.io/photo/electrician-electricity-5OFPE51CY7'),
  panelCabinet: img('panel-cabinet', 'לוח חשמל ביתי מודרני עם מפסקים ממוספרים', [480, 720, 960, 1440], 0.771, 'https://commons.wikimedia.org/w/index.php?curid=144977013'),
  breakersRow: img('breakers-row', 'שורת מפסקים אוטומטיים ומפסק פחת בלוח חשמל', [480, 720, 960, 1440], 1.29, 'https://commons.wikimedia.org/w/index.php?curid=144977327'),
  panelModern: img('panel-modern', 'לוח חשמל מסודר עם מפסקים ושעון שבת', [480, 720, 960, 1440], 1.377, 'https://commons.wikimedia.org/w/index.php?curid=144977159'),
  oldWiring: img('old-wiring', 'חיווט ישן וחשוף על קיר בבניין מגורים', [480, 720, 960], 1.784, 'https://www.rawpixel.com/image/3288874/free-photo-image-apartment-bookcase-cable'),
  insulationTester: img('insulation-tester', 'מכשיר לבדיקת בידוד והארקה', [480, 720, 960, 1440], 1.333, 'https://commons.wikimedia.org/w/index.php?curid=118515944'),
  pendantLights: img('pendant-lights', 'גופי תאורה תלויים מזכוכית', [480, 720, 960], 1.5, 'https://www.rawpixel.com/image/3302407/free-photo-image-chandelier-hanging-lamp-bulb'),
  kitchenLed: img('kitchen-led', 'מטבח עם תאורת לד מתחת לארונות', [480, 720, 960], 1.5, 'https://stocksnap.io/photo/house-home-9G5X445AP9'),
  evHome: img('ev-home', 'רכב חשמלי בטעינה בחניה פרטית', [480, 720, 960, 1440], 1.328, 'https://commons.wikimedia.org/w/index.php?curid=166275841'),
  evPlug: img('ev-plug', 'תקע טעינה מחובר לרכב חשמלי', [480, 720, 960], 1.51, 'https://www.rawpixel.com/image/6081044/electric-car-charging-station'),
  outlets: img('outlets', 'שקעי חשמל בקיר עם תקעים מחוברים', [480, 720, 960], 1.5, 'https://www.rawpixel.com/image/432903/electrical-plugs'),
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

export const srcFor = (image: SiteImage, width: number) => `/images/${image.id}-${width}.webp`;
