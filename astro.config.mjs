import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: process.env.SITE_URL || "https://example.com",
  output: "static",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
