export interface ProjectFact {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Mirrors the "Projects" SharePoint list schema described in the project plan. */
export interface Project {
  id: string;
  contentType: 'Project' | 'News';
  title: string;
  titleEn?: string;
  slug: string;
  slugEn?: string;
  client?: string;
  location?: string;
  categories: string[];
  publishDate: string;
  published: boolean;
  sortOrder?: number;
  coverImage: string;
  gallery: string[];
  bodyTr: string;
  bodyEn?: string;
  metaDescriptionTr?: string;
  metaDescriptionEn?: string;
  facts: ProjectFact[];
  faq: FaqItem[];
}
