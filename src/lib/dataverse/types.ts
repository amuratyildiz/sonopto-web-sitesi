export interface ProjectFact {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProjectImage {
  src: string;
  /** Empty for a photo whose alt text has not been written yet. */
  alt: string;
}

/**
 * One reference write-up, as the site needs it.
 *
 * `categories` and `clientType` hold stable keys ("led-ekran", "kamu"), not the
 * Turkish labels Dataverse stores: they end up in URLs as filter state and have
 * to read the same on the English side, so the visible wording lives in the
 * dictionaries under references.jobTypes / references.clientTypes.
 */
export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  slug: string;
  slugEn?: string;
  client?: string;
  location?: string;
  categories: string[];
  clientType?: string;
  publishDate: string;
  published: boolean;
  sortOrder?: number;
  coverImage: string;
  coverAlt: string;
  gallery: ProjectImage[];
  bodyTr: string;
  bodyEn?: string;
  metaDescriptionTr?: string;
  metaDescriptionEn?: string;
  facts: ProjectFact[];
  faq: FaqItem[];
  /** Only the rows whose English question and answer are both filled in. */
  faqEn: FaqItem[];
}
