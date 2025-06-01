// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // This line should be added

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()] // And this part
});
