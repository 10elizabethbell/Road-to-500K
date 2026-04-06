import { getCollection, type CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;

export function getReadingTime(text?: string) {
  const words = (text || "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function isScheduled(entry: BlogEntry) {
  return Boolean(
    entry.data.scheduledDate && entry.data.scheduledDate.getTime() > Date.now()
  );
}

export function isPublished(entry: BlogEntry) {
  return !entry.data.draft && !isScheduled(entry);
}

export async function getPublishedPosts(options?: { includeUnlisted?: boolean }) {
  const posts = await getCollection("blog");

  return posts
    .filter((entry) => isPublished(entry))
    .filter((entry) => options?.includeUnlisted || !entry.data.unlisted)
    .sort(
      (a, b) =>
        b.data.publishDate.getTime() - a.data.publishDate.getTime()
    );
}
