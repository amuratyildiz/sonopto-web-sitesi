import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { getGraphClient } from './graphClient';
import { sampleProjects } from '../../data/projects.sample';
import type { FaqItem, Project, ProjectFact } from './types';

interface SharePointListItemFields {
  Title: string;
  TitleEN?: string;
  Slug: string;
  SlugEN?: string;
  ContentType?: 'Project' | 'News';
  Client?: string;
  Location?: string;
  Category?: string; // single-choice SharePoint column — Graph returns one string, not an array
  PublishDate?: string;
  Published?: boolean;
  SortOrder?: number;
  BodyTR?: string;
  BodyEN?: string;
  MetaDescriptionTR?: string;
  MetaDescriptionEN?: string;
  ProjectFacts?: string;
  FaqItems?: string;
}

function safeParseJson<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/**
 * Lists media files already downloaded for a project by the `prebuild`
 * script (scripts/fetch-project-media.mjs), which runs before `astro
 * build` and populates public/references/<slug>/ from the "ProjectMedia"
 * SharePoint document library. Falls back to the placeholder cover when
 * no real photos have been downloaded yet (e.g. GRAPH_MEDIA_DRIVE_ID unset).
 */
function localMediaFiles(slug: string): string[] {
  const dir = path.resolve('public', 'references', slug);
  if (!existsSync(dir)) return [];
  return readdirSync(dir).sort();
}

function mapListItem(fields: SharePointListItemFields, id: string, mediaBase: string): Project {
  const mediaFiles = localMediaFiles(fields.Slug);
  const hasCover = mediaFiles.includes('cover.jpg');
  const gallery = mediaFiles.filter((file) => file !== 'cover.jpg').map((file) => `${mediaBase}/${fields.Slug}/${file}`);

  return {
    id,
    contentType: fields.ContentType ?? 'Project',
    title: fields.Title,
    titleEn: fields.TitleEN,
    slug: fields.Slug,
    slugEn: fields.SlugEN,
    client: fields.Client,
    location: fields.Location,
    categories: fields.Category ? [fields.Category] : [],
    publishDate: fields.PublishDate ?? new Date().toISOString(),
    published: fields.Published ?? false,
    sortOrder: fields.SortOrder,
    coverImage: hasCover ? `${mediaBase}/${fields.Slug}/cover.jpg` : '/references/placeholder-cover.svg',
    gallery,
    bodyTr: fields.BodyTR ?? '',
    bodyEn: fields.BodyEN,
    metaDescriptionTr: fields.MetaDescriptionTR,
    metaDescriptionEn: fields.MetaDescriptionEN,
    facts: safeParseJson<ProjectFact[]>(fields.ProjectFacts, []),
    faq: safeParseJson<FaqItem[]>(fields.FaqItems, []),
  };
}

/**
 * Fetches published projects from the "Projects" SharePoint list at build
 * time. Falls back to local sample data when GRAPH_* / SharePoint list env
 * vars are not configured, so `astro build` keeps working before the M365
 * side has been provisioned (see README "SharePoint kurulumu").
 */
export async function getProjects(): Promise<Project[]> {
  const client = getGraphClient();
  const siteId = process.env.GRAPH_SITE_ID;
  const listId = process.env.GRAPH_PROJECTS_LIST_ID;
  const mediaBase = process.env.GRAPH_MEDIA_BASE_URL ?? '/references';

  if (!client || !siteId || !listId) {
    return sampleProjects.filter((project) => project.published);
  }

  const response = await client
    .api(`/sites/${siteId}/lists/${listId}/items`)
    .expand('fields')
    .top(200)
    .get();

  const items = (response.value ?? []) as Array<{ id: string; fields: SharePointListItemFields }>;

  return items
    .map((item) => mapListItem(item.fields, item.id, mediaBase))
    .filter((project) => project.published)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug || project.slugEn === slug);
}
