import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://freecellio.com",
  output: "static",
  adapter: cloudflare(),

  integrations: [
    tailwind(),
    sitemap(),
  ],
});
