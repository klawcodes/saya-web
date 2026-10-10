import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

export default defineConfig({
  // TODO: ganti dengan domain asli (atau set env SITE_URL saat build)
  site: process.env.SITE_URL ?? "https://saya.monster",
  integrations: [sitemap(), icon()],
  vite: { plugins: [tailwindcss()] },
});