/** @type {import('tailwindcss').Config} */

import { theme } from "./config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme,
  plugins: [],
};
