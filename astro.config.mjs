import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import site from "./src/site.config.json" with { type: "json" };

// The site is built from rows: Studio OS writes src/content and
// src/site.config.json; Cloudflare Pages builds on every push.
export default defineConfig({
  site: site.url,
  trailingSlash: "always",
  integrations: [mdx()],
  build: { format: "directory" },
});
