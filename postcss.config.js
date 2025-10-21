/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Убедитесь, что здесь нет "@tailwindcss/postcss"
  },
};

export default config;