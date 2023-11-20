import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
function defaultLayoutPlugin() {
  return function (_, file) {
    file.data.astro.frontmatter.layout = "@layouts/Default.astro";
  };
}


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  markdown: {
    remarkPlugins: [defaultLayoutPlugin],
    extendDefaultPlugins: true
  }
});