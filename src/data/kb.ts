import type { Dictionary } from '../content/i18n/tr';
import type { RouteId } from '../lib/i18n/routes';

export type KbCategoryKey = keyof Dictionary['kb']['categories'];

/**
 * Knowledge base taxonomy.
 *
 * The keys are the vendor's own category segments, kept verbatim so the import
 * script can map a source URL to a category without a translation table. The
 * slugs are ours and are what the visitor sees; once published they must not
 * change without a redirect.
 *
 * Display order is the source's own sidebar order, which walks a new user
 * through the product roughly in the order they meet it — dashboard, register,
 * install, build a playlist — rather than alphabetically.
 */
export const kbCategoryKeys = [
  'dashboard',
  'register',
  'installation',
  'playlists',
  'apps',
  'templates',
  'media_assets',
  'schedule',
  'screens',
  'videowall',
  'media_playback_quota',
  'proof_of_play',
  'account_settings',
  'languages',
  'user_mgmt',
  'integrations',
  'geolocation',
  'dynamic-data',
  'troubleshoot',
] as const satisfies readonly KbCategoryKey[];

export const kbCategoryEntries: Record<KbCategoryKey, { slug: { tr: string; en: string } }> = {
  dashboard: { slug: { tr: 'panel', en: 'dashboard' } },
  register: { slug: { tr: 'kayit-ve-giris', en: 'registration' } },
  installation: { slug: { tr: 'kurulum', en: 'installation' } },
  playlists: { slug: { tr: 'calma-listeleri', en: 'playlists' } },
  apps: { slug: { tr: 'uygulamalar', en: 'apps' } },
  templates: { slug: { tr: 'sablonlar', en: 'templates' } },
  media_assets: { slug: { tr: 'medya-kitapligi', en: 'media-assets' } },
  schedule: { slug: { tr: 'zamanlama', en: 'schedules' } },
  screens: { slug: { tr: 'ekranlar', en: 'screens' } },
  videowall: { slug: { tr: 'video-wall', en: 'video-wall' } },
  media_playback_quota: { slug: { tr: 'medya-oynatma-kotasi', en: 'media-playback-quota' } },
  proof_of_play: { slug: { tr: 'yayin-kaniti', en: 'proof-of-play' } },
  account_settings: { slug: { tr: 'ayarlar', en: 'settings' } },
  languages: { slug: { tr: 'diller', en: 'languages' } },
  user_mgmt: { slug: { tr: 'kullanici-yonetimi', en: 'user-management' } },
  integrations: { slug: { tr: 'entegrasyonlar', en: 'integrations' } },
  geolocation: { slug: { tr: 'cografi-konum', en: 'geolocation' } },
  'dynamic-data': { slug: { tr: 'dinamik-veri', en: 'dynamic-data' } },
  troubleshoot: { slug: { tr: 'sorun-giderme', en: 'troubleshooting' } },
};

/** The section root; everything below it is assembled in src/lib/kb/paths.ts. */
export const KB_ROUTE: RouteId = 'support';

/**
 * Articles excluded from the import.
 *
 * "Hexa AI" is the vendor's own feature brand. It cannot be carried under the
 * white label and renaming it would diverge from what the dashboard actually
 * says, so the article is dropped rather than published half-true.
 */
export const kbExcludedSourcePaths: readonly string[] = ['installation/install-hexa-ai-apk'];
