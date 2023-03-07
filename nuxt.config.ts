// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],

  // Auto-import components.
  components: true,

  // If you have enabled Take Over Mode or installed the TypeScript Vue Plugin
  // (Volar), you can disable generating the shim for *.vue files in your
  // nuxt.config file:
  // https://nuxt.com/docs/getting-started/installation#prerequisites
  typescript: {
    shim: false
  },

  css: [
    // Typography
    '@fontsource/public-sans/variable.css',
    '@fontsource/public-sans/variable-italic.css',

    '@fontsource/ibm-plex-mono/latin-400.css',
    '@fontsource/ibm-plex-mono/latin-700.css',

    // Application CSS
    '~/assets/css/main.css',

    // Fontawesome, see also plugins/fontawesome.js
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Nuxt Content configuration
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
});
