import type { Dictionary } from '../content/i18n/tr';
import type { RouteId } from '../lib/i18n/routes';
import type { SolutionKey } from './solutions';

/**
 * sonopto.signage — the digital signage platform sold under our own name.
 *
 * WHITE LABEL. The platform is licensed from a third party and resold as ours.
 * The vendor's name must never appear anywhere in this repository's output:
 * not in copy, alt text, schema, comments that ship, filenames or link targets.
 * The vendor also operates an unbranded portal at a *.web.app address — never
 * link it. Every customer-facing link goes through the address below, which is
 * ours and carries no vendor marks.
 */
export const SIGNAGE_PLATFORM_URL = 'https://signage.sonopto.com';

/** Rendered as two spans so the period can take the accent colour. */
export const SIGNAGE_NAME = { stem: 'sonopto', dot: '.', suffix: 'signage' } as const;

/**
 * Sector pages that get a cross-link to the product. Constrained to the
 * solution keys so a sector added later has to opt in deliberately rather than
 * inherit a link that may not apply to it.
 */
export const signageUseCaseKeys = [
  'conference',
  'education',
  'hotel',
  'publicSector',
] as const satisfies readonly SolutionKey[];

export type SignageFeatureKey = keyof Dictionary['signage']['features'];
export type SignageIntegrationKey = keyof Dictionary['signage']['integrations'];

/** Display order for the two grids. The key doubles as the icon name. */
export const signageFeatureKeys = [
  'offline',
  'grouping',
  'power',
  'geo',
  'monitoring',
  'scheduling',
] as const satisfies readonly SignageFeatureKey[];

export const signageIntegrationKeys = [
  'design',
  'drive',
  'sheets',
  'doorSign',
] as const satisfies readonly SignageIntegrationKey[];

export type SignageSectorKey = keyof Dictionary['signage']['sectors'];

/**
 * Sectors that buy signage on its own terms, rather than as part of an AV
 * installation. Deliberately not the four keys in solutions.ts: those pages
 * already rank for their own sectors, and duplicating them here would put two
 * of our own pages against each other for the same query.
 *
 * The key doubles as the icon name.
 */
export const signageSectorKeys = [
  'retail',
  'food',
  'office',
  'transport',
  'education',
  'health',
] as const satisfies readonly SignageSectorKey[];

interface SignageSectorEntry {
  routeId: RouteId;
  /**
   * Feature photo, cropped 4:3. null where we have no genuine reference shot —
   * healthcare, for now. The page simply omits the figure rather than falling
   * back to stock imagery, which never passes for the real thing.
   */
  image: string | null;
  /** A second shot at its own aspect, laid beside the screens list. */
  imageSecondary?: string;
}

export const signageSectorEntries: Record<SignageSectorKey, SignageSectorEntry> = {
  retail: {
    routeId: 'signageRetail',
    image: '/signage/sektorler/magaza-vitrin-ekrani-sonopto.webp',
    // Portrait subject: a 4:3 crop cut the totem top and bottom, so this one
    // keeps its own square framing beside the list instead.
    imageSecondary: '/signage/sektorler/market-reyon-totem-ekrani-sonopto.webp',
  },
  food: {
    routeId: 'signageFood',
    image: '/signage/sektorler/restoran-dijital-menu-panosu-sonopto.webp',
    imageSecondary: '/signage/sektorler/kafe-kahve-menu-ekrani-sonopto.webp',
  },
  office: {
    routeId: 'signageOffice',
    image: '/signage/sektorler/ofis-dolu-oda-kapi-ekrani-sonopto.webp',
    imageSecondary: '/signage/sektorler/toplanti-odasi-kapi-ekrani-sonopto.webp',
  },
  transport: {
    routeId: 'signageTransport',
    image: '/signage/sektorler/tren-istasyonu-bilgilendirme-ekrani-sonopto.webp',
    imageSecondary: '/signage/sektorler/terminal-video-wall-sonopto.webp',
  },
  education: {
    routeId: 'signageEducation',
    image: '/signage/sektorler/okul-koridoru-duyuru-ekrani-sonopto.webp',
    imageSecondary: '/signage/sektorler/kutuphane-bilgilendirme-ekrani-sonopto.webp',
  },
  // Still no genuine reference shot for healthcare.
  health: { routeId: 'signageHealth', image: null },
};

export type SignageIconName = SignageFeatureKey | SignageIntegrationKey | SignageSectorKey;

/**
 * A supported player platform. Brand names, so they live here rather than in
 * the dictionaries — there is nothing to translate.
 *
 * Each mark is the brand's own lockup, used to identify a supported platform.
 * They were flattened onto white, trimmed of packaging whitespace and
 * normalised to 80px tall; aspect ratios still run from roughly 6:1 to 1:1, so
 * the layout gives every one a fixed contain-box rather than a uniform width.
 */
export interface SignageDevice {
  /** Also the dictionary key for this device's summary line, so a device added
      here without copy in both languages fails the build. */
  key: keyof Dictionary['signage']['devices'];
  /** Brand/product name. Not translated. */
  label: string;
  /** Filename under /signage/cihazlar/, named after the key. */
  file: string;
  /** Platform integration ratings, 0–5. null where the platform is generic. */
  overall: number | null;
  performance: number | null;
  autoUpdate: boolean | null;
  remoteReboot: boolean | null;
  powerManagement: boolean | null;
}

/**
 * Player platform compatibility.
 *
 * The ratings and capability flags describe how well the PLATFORM integrates
 * with the software — they are not our own bench tests of the hardware, and the
 * page labels them accordingly. They were read out of the vendor's published
 * compatibility matrix with two independent parsers (the rating value carried
 * in each star's alt text, and a count of the star glyphs themselves) which
 * agreed on every row.
 *
 * Order follows the categories a buyer actually chooses between: the platform
 * itself, then displays with a player built in, then external players. It is
 * also the tab order on the page.
 *
 * Adding a device here needs three other edits: its summary in both
 * dictionaries (enforced by the key type above), its logo in
 * public/signage/cihazlar/, and its selector in the `.device-chip` highlight
 * block in global.css — that last one is the only link the compiler cannot
 * check for you.
 */
export const signageDevices: readonly SignageDevice[] = [
  { key: 'android', label: 'Android', file: 'android.webp', overall: null, performance: null, autoUpdate: null, remoteReboot: null, powerManagement: null },
  { key: 'philips', label: 'Philips', file: 'philips.webp', overall: 5, performance: 4.5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'bravia', label: 'Sony BRAVIA', file: 'bravia.webp', overall: 5, performance: 4.5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'fireTv', label: 'Amazon Fire TV', file: 'fireTv.webp', overall: 4, performance: 3.5, autoUpdate: true, remoteReboot: false, powerManagement: false },
  { key: 'signageStick', label: 'Amazon Signage Stick', file: 'signageStick.webp', overall: 5, performance: 5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'tcl', label: 'TCL', file: 'tcl.webp', overall: 5, performance: 5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'viewsonic', label: 'ViewSonic', file: 'viewsonic.webp', overall: 5, performance: 5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'raspberryPi', label: 'Raspberry Pi', file: 'raspberryPi.webp', overall: 5, performance: 4.5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'brightsign', label: 'BrightSign', file: 'brightsign.webp', overall: 5, performance: 5, autoUpdate: true, remoteReboot: true, powerManagement: false },
  { key: 'samsung', label: 'Samsung', file: 'samsung.webp', overall: 5, performance: 4.5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'vestel', label: 'Vestel', file: 'vestel.webp', overall: 5, performance: 4.5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'novastar', label: 'NovaStar', file: 'novastar.webp', overall: 4, performance: 4, autoUpdate: true, remoteReboot: false, powerManagement: false },
  { key: 'amino', label: 'Amino', file: 'amino.webp', overall: 5, performance: 5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'lg', label: 'LG', file: 'lg.webp', overall: 5, performance: 5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'chromeos', label: 'ChromeOS', file: 'chromeos.webp', overall: 5, performance: 5, autoUpdate: true, remoteReboot: true, powerManagement: true },
  { key: 'googleTv', label: 'Google TV', file: 'googleTv.webp', overall: 4.5, performance: 5, autoUpdate: true, remoteReboot: true, powerManagement: false },
  { key: 'chromecast', label: 'Chromecast', file: 'chromecast.webp', overall: 4, performance: 4, autoUpdate: true, remoteReboot: false, powerManagement: false },
];
