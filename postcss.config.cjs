// postcss.config.js

/** @type {import('postcss-load-config').Config} */
// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- FIXED LINE
    'autoprefixer': {},
  },
};