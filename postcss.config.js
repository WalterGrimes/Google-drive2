// postcss.config.js

/** @type {import('postcss-load-config').Config} */
module.exports = { // <-- ИСПОЛЬЗУЙТЕ module.exports ВМЕСТО export default
  plugins: {
    // Tailwind CSS должен быть первым
    tailwindcss: {}, 
    // Autoprefixer должен идти после Tailwind
    autoprefixer: {},
  },
};