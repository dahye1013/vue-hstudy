const { description } = require('../../package');

module.exports = {
  title: 'Vue HStudy',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Vue-Study',
        link: '/vueStudy/',
      },
      {
        text: 'Vue-Press',
        link: '/vuePress/',
      },
      // {
      //   text: "VuePress",
      //   link: "https://v1.vuepress.vuejs.org",
      // },
    ],
    sidebar: {
      '/vueStudy/': [
        {
          title: 'VUE-CLI',
          collapsable: false,
          children: [
            '',
            '01-browser-compatibility',
            '02-html-static-asset',
            '03-work-with-css',
            '04-work-with-webpack',
            '05-mode-and-environment-variables',
            '06-build-target',
            '07-troubleshoting',
          ],
        },
        {
          title: 'VUE-Plugin',
          collapsable: false,
          children: ['vp-00-basic', 'vp-01-prettier'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
