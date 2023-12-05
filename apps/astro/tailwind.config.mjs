/** @type {import('tailwindcss-config').Config} */
const baseConfig = require('tailwindcss-config');

export default {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
};
