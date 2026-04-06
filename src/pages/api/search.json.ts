import type { APIRoute } from "astro";
import { getPublishedPosts, getReadingTime } from "../../lib/posts";

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const body = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    publishDate: post.data.publishDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    readingTime: getReadingTime(post.body),
    url: `/blog/${post.id}/`
  }));

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
};
