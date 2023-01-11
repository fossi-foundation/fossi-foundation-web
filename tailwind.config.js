/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        //'3xl': '1600px',
      },

      backgroundImage: {
        'hero': "url('~/assets/images/hero-bg.jpg')",
        'pattern-community': "url('~/assets/images/pattern-community.png')",
        'pattern-guardianship': "url('~/assets/images/pattern-guardianship.png')",
        'pattern-innovation': "url('~/assets/images/pattern-innovation.png')",
        'pattern-resources': "url('~/assets/images/pattern-resources.png')",
      },

      // TODO: REVISIT
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.warm-black'),
            h2: {
              color: theme('colors.gray.800'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.600')
              },
            },
          },
        },
      })
    },

    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },

    boxShadow: {
      // Elevation
      'high': '8.0px 10.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
      'mid': '4.0px 4.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
      'low': '2.0px 2.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
    },

    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      'ultraviolet': '#6320EE',
      'pink-piano': '#F72585',
      'warm-black': '#211A1D',
      'dark-pastel-grey': '#211A1D',
      'pastel-grey': '#F8F5FA',
      'nasu-purple': '#5D16CE',
      'shade-of-violet': '#7209B7',
      'fuchsia-flourish': '#D61E92',
      'neon': 'linear-gradient(-90.0deg, rgba(99, 32, 238, 1.0) 0%, rgba(247, 37, 133, 1.0) 100%)',
    },

    spacing: {
      '0': '0',
      '10': '10px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '32': '32px',
      '48': '48px',
      '64': '64px',
      '96': '96px',
    }

    //textColor: ({ theme }) => (theme('colors.warm-black'))
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
