// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Diisi dengan URL final saat domain dipasang. Untuk Cloudflare Pages,
  // boleh dibiarkan; sesuaikan jika perlu sitemap absolut.
  site: "https://softtin.pages.dev",

  // Situs statis penuh — paling cepat & gratis di Cloudflare Pages.
  output: "static",

  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare()
});