import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/posts";
import { siteConfig, withBase } from "../lib/site";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const site = context.site || process.env.SITE_URL || "https://example.com";

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: withBase(`/blog/${post.id}/`)
    }))
  });
}
