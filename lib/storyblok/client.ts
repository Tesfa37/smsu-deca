/**
 * Storyblok REST API Client
 * Handles fetching stories and content from Storyblok CMS
 */

const STORYBLOK_API_URL = "https://api.storyblok.com/v2/cdn";
const STORYBLOK_TOKEN = process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN;

if (!STORYBLOK_TOKEN) {
  console.warn(
    "Storyblok access token is missing. Set NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN in .env.local"
  );
}

interface StoryblokApiResponse<T = unknown> {
  story?: T;
  stories?: T[];
  cv?: number;
  rels?: unknown[];
  links?: unknown[];
}

interface FetchStoriesOptions {
  starts_with?: string;
  by_slugs?: string;
  excluding_slugs?: string;
  fallback_lang?: string;
  by_uuids?: string;
  excluding_ids?: string;
  per_page?: number;
  page?: number;
  sort_by?: string;
  search_term?: string;
  filter_query?: Record<string, unknown>;
  is_startpage?: boolean;
  with_tag?: string;
  version?: "draft" | "published";
}

/**
 * Fetch multiple stories from Storyblok
 * @param options - Query options for filtering stories
 * @returns Array of stories
 */
export async function fetchStories<T = unknown>(
  options: FetchStoriesOptions = {}
): Promise<T[]> {
  if (!STORYBLOK_TOKEN) {
    throw new Error("Storyblok access token is not configured");
  }

  const params = new URLSearchParams({
    token: STORYBLOK_TOKEN,
    version: options.version || "published",
    ...(options.starts_with && { starts_with: options.starts_with }),
    ...(options.per_page && { per_page: options.per_page.toString() }),
    ...(options.page && { page: options.page.toString() }),
    ...(options.sort_by && { sort_by: options.sort_by }),
    ...(options.search_term && { search_term: options.search_term }),
    ...(options.with_tag && { with_tag: options.with_tag }),
  });

  try {
    const response = await fetch(
      `${STORYBLOK_API_URL}/stories?${params.toString()}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Storyblok API error: ${response.statusText}`);
    }

    const data: StoryblokApiResponse<T> = await response.json();
    return data.stories || [];
  } catch (error) {
    console.error("Error fetching stories from Storyblok:", error);
    throw error;
  }
}

/**
 * Fetch a single story by its slug
 * @param slug - The story slug (e.g., "about-us" or "blog/my-post")
 * @param version - Draft or published version
 * @returns Single story object
 */
export async function fetchStoryBySlug<T = unknown>(
  slug: string,
  version: "draft" | "published" = "published"
): Promise<T | null> {
  if (!STORYBLOK_TOKEN) {
    throw new Error("Storyblok access token is not configured");
  }

  const params = new URLSearchParams({
    token: STORYBLOK_TOKEN,
    version,
  });

  try {
    const response = await fetch(
      `${STORYBLOK_API_URL}/stories/${slug}?${params.toString()}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Storyblok API error: ${response.statusText}`);
    }

    const data: StoryblokApiResponse<T> = await response.json();
    return data.story || null;
  } catch (error) {
    console.error(`Error fetching story "${slug}" from Storyblok:`, error);
    throw error;
  }
}

/**
 * Fetch stories by specific UUIDs
 * @param uuids - Array of story UUIDs
 * @returns Array of stories
 */
export async function fetchStoriesByUuids<T = unknown>(
  uuids: string[]
): Promise<T[]> {
  if (!STORYBLOK_TOKEN) {
    throw new Error("Storyblok access token is not configured");
  }

  if (uuids.length === 0) {
    return [];
  }

  return fetchStories<T>({
    by_uuids: uuids.join(","),
  });
}

/**
 * Invalidate Storyblok cache (for use in webhooks)
 * Note: This is handled by Next.js revalidation
 */
export function getStoryblokCacheKey(slug: string): string {
  return `storyblok-${slug}`;
}

