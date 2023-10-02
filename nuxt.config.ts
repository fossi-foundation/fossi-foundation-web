import ExcerptTransformerModule from './excerpt-transformer-module/excerpt-transformer-module'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // @ts-ignore
    ExcerptTransformerModule,
    '@nuxtjs/tailwindcss',
    'nuxt-content-assets', // needs to be before @nuxt/content
    '@nuxt/content',
    'unplugin-icons/nuxt',
    '@nuxt/devtools',
  ],

  nitro: {
    prerender: {
      routes: ['/feed.xml'],
    },
    routeRules: {
      // Make the Matrix configuration accessible to clients (and all other
      // configuration in this directory with it).
      '/.well-known/**': { cors: true },
    }
  },

  // Make all components in ~/components available for Nuxt Content through its
  // MDC syntax, not only the ones in ~/components/content (which are global by
  // default).
  components: {
    global: true,
    dirs: ['~/components']
  },

  // If you have enabled Take Over Mode or installed the TypeScript Vue Plugin
  // (Volar), you can disable generating the shim for *.vue files in your
  // nuxt.config file:
  // https://nuxt.com/docs/getting-started/installation#prerequisites
  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        types: [
          "unplugin-icons/types/vue",
        ]
      }
    }
  },

  css: [
    // Typography
    '@fontsource-variable/public-sans',
    '@fontsource-variable/public-sans/wght-italic.css',

    '@fontsource/ibm-plex-mono/latin-400.css',
    '@fontsource/ibm-plex-mono/latin-700.css',
  ],

  // Nuxt Content configuration
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: {
      // The configuration below is supposed to be default according to
      // https://content.nuxtjs.org/api/configuration#documentdriven, but that's
      // somehow not the case.
      // TODO: Double-check after a while and simplify to 'documentDriven: true'
      globals: {
        theme: {
          where: [{
            _id: 'content:_theme.yml'
          }],
        },
      },
    },
    highlight: {
      // See https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "github-light",
      preload: [
        // Add all languages here for which code highlighting is desired.
        // https://github.com/shikijs/shiki/blob/main/docs/languages.md
        'bash',
        'python',
      ]
    },
  },

  // Nuxt Content Assets configuration.
  // See https://github.com/davestewart/nuxt-content-assets for options.
  contentAssets: {
    // add image size hints
    imageSize: 'attrs url',
  },

  app: {
    head: {
      title: 'FOSSi Foundation',
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', type: 'image/png', sizes: "180x180", href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: "/favicon-16x16.png" },
      ],
    }
  },

  routeRules: {
    // Blog posts from pre-2023 website
    '/2015/10/10/welcome': { redirect: '/blog/2015-10-10-welcome' },
    '/2016/01/28/update': { redirect: '/blog/2016-01-28-update' },
    '/2016/02/20/licenses': { redirect: '/blog/2016-02-20-licenses' },
    '/2016/03/01/gsoc': { redirect: '/blog/2016-03-01-gsoc' },
    '/2016/04/28/designcontest': { redirect: '/blog/2016-04-28-designcontest' },
    '/2016/07/07/welcome_andrew': { redirect: '/blog/2016-07-07-welcome_andrew' },
    '/2016/07/31/gsocupdate': { redirect: '/blog/2016-07-31-gsocupdate' },
    '/2016/08/03/orconf_2016_first_batch': { redirect: '/blog/2016-08-03-orconf_2016_first_batch' },
    '/2016/08/16/froscon': { redirect: '/blog/2016-08-16-froscon' },
    '/2016/10/13/designcontest': { redirect: '/blog/2016-10-13-designcontest' },
    '/2017/01/18/fosdem': { redirect: '/blog/2017-01-18-fosdem' },
    '/2017/01/22/librecores': { redirect: '/blog/2017-01-22-librecores' },
    '/2017/01/26/outlook': { redirect: '/blog/2017-01-26-outlook' },
    '/2017/02/10/licensing-roadmap': { redirect: '/blog/2017-02-10-licensing-roadmap' },
    '/2017/02/16/tensilica-day-riscv-munich': { redirect: '/blog/2017-02-16-tensilica-day-riscv-munich' },
    '/2017/03/02/gsoc': { redirect: '/blog/2017-03-02-gsoc' },
    '/2017/04/07/riscv-munich': { redirect: '/blog/2017-04-07-riscv-munich' },
    '/2017/05/04/gsoc': { redirect: '/blog/2017-05-04-gsoc' },
    '/2017/06/13/oshpark-sponsorship': { redirect: '/blog/2017-06-13-oshpark-sponsorship' },
    '/2017/07/15/gsoc': { redirect: '/blog/2017-07-15-gsoc' },
    '/2017/07/27/orconf_2017_teaser': { redirect: '/blog/2017-07-27-orconf_2017_teaser' },
    '/2017/08/11/rs_sponsors_orconf': { redirect: '/blog/2017-08-11-rs_sponsors_orconf' },
    '/2017/09/14/orconf_2017_roundup': { redirect: '/blog/2017-09-14-orconf_2017_roundup' },
    '/2017/09/22/librecores-contrib': { redirect: '/blog/2017-09-22-librecores-contrib' },
    '/2018/01/11/gsoc': { redirect: '/blog/2018-01-11-gsoc' },
    '/2018/01/28/ORConf_2018_announcement': { redirect: '/blog/2018-01-28-ORConf_2018_announcement' },
    '/2018/02/12/gsoc': { redirect: '/blog/2018-02-12-gsoc' },
    '/2018/07/15/ECL': { redirect: '/blog/2018-07-15-ECL' },
    '/2018/07/27/ORConf_2018_update': { redirect: '/blog/2018-07-27-ORConf_2018_update' },
    '/2018/08/15/ECL': { redirect: '/blog/2018-08-15-ECL' },
    '/2018/10/12/ECL': { redirect: '/blog/2018-10-12-ECL' },
    '/2018/11/07/orconf-videos': { redirect: '/blog/2018-11-07-orconf-videos' },
    '/2019/02/24/announcing-latchup-portland': { redirect: '/blog/2019-02-24-announcing-latchup-portland' },
    '/2019/02/26/gsoc': { redirect: '/blog/2019-02-26-gsoc' },
    '/2019/03/30/latchup-portland-details': { redirect: '/blog/2019-03-30-latchup-portland-details' },
    '/2019/06/01/gsoc': { redirect: '/blog/2019-06-01-gsoc' },
    '/2019/06/05/openhwgroup': { redirect: '/blog/2019-06-05-openhwgroup' },
    '/2019/06/11/ECL': { redirect: '/blog/2019-06-11-ECL' },
    '/2019/07/01/ORConf_2019_announcement': { redirect: '/blog/2019-07-01-ORConf_2019_announcement' },
    '/2019/08/23/gsoc_LibrecoresCI_Report': { redirect: '/blog/2019-08-23-gsoc_LibrecoresCI_Report' },
    '/2019/09/03/gsoc-64b-pointers-in-rv32': { redirect: '/blog/2019-09-03-gsoc-64b-pointers-in-rv32' },
    '/2019/09/04/gsoc-finished': { redirect: '/blog/2019-09-04-gsoc-finished' },
    '/2020/01/06/fossistanbul': { redirect: '/blog/2020-01-06-fossistanbul' },
    '/2020/01/22/announcing-latchup-cambridge': { redirect: '/blog/2020-01-22-announcing-latchup-cambridge' },
    '/2020/02/15/ECL': { redirect: '/blog/2020-02-15-ECL' },
    '/2020/03/19/ECL': { redirect: '/blog/2020-03-19-ECL' },
    '/2020/03/31/gsocrules': { redirect: '/blog/2020-03-31-gsocrules' },
    '/2020/04/01/cocotb-usersurvey': { redirect: '/blog/2020-04-01-cocotb-usersurvey' },
    '/2020/05/04/gsoc2020-intro': { redirect: '/blog/2020-05-04-gsoc2020-intro' },
    '/2020/06/17/fossi-dial-up': { redirect: '/blog/2020-06-17-fossi-dial-up' },
    '/2020/06/18/solderpad-announcement': { redirect: '/blog/2020-06-18-solderpad-announcement' },
    '/2020/06/30/skywater-pdk': { redirect: '/blog/2020-06-30-skywater-pdk' },
    '/2020/07/08/cocotb-1-4-0': { redirect: '/blog/2020-07-08-cocotb-1-4-0' },
    '/2020/12/31/year-recap': { redirect: '/blog/2020-12-31-year-recap' },
    '/2021/01/19/embench-1-0': { redirect: '/blog/2021-01-19-embench-1-0' },
    '/2021/03/07/45-chips-in-30-days': { redirect: '/blog/2021-03-07-45-chips-in-30-days' },
    '/2021/03/10/gsoc': { redirect: '/blog/2021-03-10-gsoc' },
    '/2021/03/11/cocotb-1-5-0': { redirect: '/blog/2021-03-11-cocotb-1-5-0' },
    '/2021/06/28/gsoc2021-students': { redirect: '/blog/2021-06-28-gsoc2021-students' },
    '/2021/07/13/jon-board': { redirect: '/blog/2021-07-13-jon-board' },
    '/2021/09/09/gsoc-finished': { redirect: '/blog/2021-09-09-gsoc-finished' },
    '/2021/10/20/cocotb-1-6-0': { redirect: '/blog/2021-10-20-cocotb-1-6-0' },
    '/2022/03/06/ecl48': { redirect: '/blog/2022-03-06-ecl48' },
    '/2022/04/11/gsoc': { redirect: '/blog/2022-04-11-gsoc' },
    '/2022/04/14/ecl49': { redirect: '/blog/2022-04-14-ecl49' },
    '/2022/05/10/ecl50': { redirect: '/blog/2022-05-10-ecl50' },
    '/2022/06/14/ecl51': { redirect: '/blog/2022-06-14-ecl51' },
    '/2022/07/12/ecl52': { redirect: '/blog/2022-07-12-ecl52' },
    '/2022/08/09/ecl53': { redirect: '/blog/2022-08-09-ecl53' },
    '/2022/08/11/gsoc22-students': { redirect: '/blog/2022-08-11-gsoc22-students' },
    '/2022/09/13/ecl54': { redirect: '/blog/2022-09-13-ecl54' },
    '/2022/10/11/ecl55': { redirect: '/blog/2022-10-11-ecl55' },
    '/2022/10/19/librecores': { redirect: '/blog/2022-10-19-librecores' },
    '/2022/11/08/ecl56': { redirect: '/blog/2022-11-08-ecl56' },
    '/2022/12/12/ecl57': { redirect: '/blog/2022-12-12-ecl57' },
    '/2023/01/01/conferences23': { redirect: '/blog/2023-01-01-conferences23' },
    '/2023/01/10/ecl58': { redirect: '/blog/2023-01-10-ecl58' },
    '/2023/02/14/ecl59': { redirect: '/blog/2023-02-14-ecl59' },
    '/2023/03/07/gsoc': { redirect: '/blog/2023-03-07-gsoc' },
    '/2023/03/14/ecl60': { redirect: '/blog/2023-03-14-ecl60' },
    '/2023/04/11/ecl61': { redirect: '/blog/2023-04-11-ecl61' },
    '/2023/05/09/ecl62': { redirect: '/blog/2023-05-09-ecl62' },
    '/2023/06/12/ecl63': { redirect: '/blog/2023-06-12-ecl63' },
    '/2023/07/02/gsoc23-students': { redirect: '/blog/2023-07-02-gsoc23-students' },
    '/2023/07/11/ecl64': { redirect: '/blog/2023-07-11-ecl64' },
    '/2023/08/08/ecl65': { redirect: '/blog/2023-08-08-ecl65' },
    '/2023/09/12/ecl66': { redirect: '/blog/2023-09-12-ecl66' },
  }
});
