/** @type {import('tailwindcss').Config} */

const baseConfig = require('tailwindcss-config');

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
