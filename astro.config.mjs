import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: process.env.SITE_URL || "https://example.com",
  base: process.env.SITE_BASE || "/",
  output: "static",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
