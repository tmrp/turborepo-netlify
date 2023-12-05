module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    [
      'postcss-preset-env',
      {
        // Options
        features: {
          'nesting-rules': {
            noIsPseudoSelector: false,
          },
        },
      },
    ],
  ],
};
