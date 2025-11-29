/**
 * TypeScript types for Storyblok CMS responses
 */

export interface StoryblokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
}

export interface StoryblokLink {
  id: string;
  url: string;
  linktype: "story" | "url" | "email" | "asset";
  fieldtype: "multilink";
  cached_url: string;
}

export interface StoryblokRichText {
  type: string;
  content?: StoryblokRichText[];
  marks?: Array<{
    type: string;
    attrs?: Record<string, unknown>;
  }>;
  attrs?: Record<string, unknown>;
  text?: string;
}

export interface StoryblokStory<T = unknown> {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  first_published_at: string;
  content: T;
  parent_id: number | null;
  group_id: string;
  alternates: Array<{
    id: number;
    name: string;
    slug: string;
    published: boolean;
    full_slug: string;
    is_folder: boolean;
    parent_id: number;
  }>;
  translated_slugs: Array<{
    lang: string;
    name: string;
    slug: string;
  }>;
  lang: string;
  position: number;
  is_startpage: boolean;
  tag_list: string[];
}

// Event-specific Storyblok content types
export interface StoryblokEventContent {
  component: "event";
  title: string;
  description: string;
  date: string;
  location: string;
  image?: StoryblokAsset;
  category: "meeting" | "competition" | "workshop" | "social" | "other";
  registration_url?: string;
  is_featured?: boolean;
  tags?: string[];
}

export type StoryblokEvent = StoryblokStory<StoryblokEventContent>;

// Officer-specific Storyblok content types
export interface StoryblokOfficerContent {
  component: "officer";
  name: string;
  position: string;
  bio: string;
  image?: StoryblokAsset;
  email: string;
  linkedin?: string;
  order?: number;
}

export type StoryblokOfficer = StoryblokStory<StoryblokOfficerContent>;

// Page content types
export interface StoryblokPageContent {
  component: "page";
  title: string;
  description?: string;
  body?: StoryblokRichText;
  seo_title?: string;
  seo_description?: string;
  og_image?: StoryblokAsset;
}

export type StoryblokPage = StoryblokStory<StoryblokPageContent>;

// Generic content block
export interface StoryblokBlock {
  _uid: string;
  component: string;
  [key: string]: unknown;
}

// Webhook payload types
export interface StoryblokWebhookPayload {
  text: string;
  action: "published" | "unpublished" | "deleted";
  space_id: number;
  story_id: number;
  full_slug: string;
  story?: StoryblokStory;
}

// API Response types
export interface StoryblokStoriesResponse<T = unknown> {
  stories: StoryblokStory<T>[];
  cv: number;
  rels?: unknown[];
  links?: unknown[];
}

export interface StoryblokStoryResponse<T = unknown> {
  story: StoryblokStory<T>;
  cv: number;
  rels?: unknown[];
  links?: unknown[];
}

// Helper type for extracting content from stories
export type StoryContent<T extends StoryblokStory> = T extends StoryblokStory<
  infer C
>
  ? C
  : never;

