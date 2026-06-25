// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // URL final situs (domain terpasang) — dipakai untuk canonical & sitemap.
  site: "https://softtin.id",
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
});
