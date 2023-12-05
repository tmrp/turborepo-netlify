/** @type {import('tailwindcss').Config} */

const baseConfig = require("tailwindcss-config");

module.exports = {
  ...baseConfig,
  content: [...baseConfig.content, "./src/**/*.{js,ts,jsx,tsx,mdx}"],
};
