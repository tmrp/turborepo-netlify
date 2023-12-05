/** @type {import('tailwindcss').Config} */

const baseConfig = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '../../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

module.exports = baseConfig;
