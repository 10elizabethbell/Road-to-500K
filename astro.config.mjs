import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: "https://roadto500k.com",
  base: "/",
  output: "static",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
