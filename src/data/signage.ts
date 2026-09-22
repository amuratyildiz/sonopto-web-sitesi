import type { Dictionary } from '../content/i18n/tr';
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

export type SignageIconName = SignageFeatureKey | SignageIntegrationKey;

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
