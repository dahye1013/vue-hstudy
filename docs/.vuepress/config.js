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
  head: [['meta', { name: 'theme-color', content: '#3eaf7c' }]],

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
        text: 'Vue-CLI',
        link: '/vueCLI/',
      },
      {
        text: 'Vue-Press',
        link: '/vuePress/',
      },
      {
        text: 'Vue-Router',
        link: '/vueRouter/',
      },
      {
        text: 'other-CS',
        link: '/otherCS/',
      },
      // {
      //   text: "VuePress",
      //   link: "https://v1.vuepress.vuejs.org",
      // },
    ],
    sidebar: {
      '/vueCLI/': [
        {
          title: 'VUE-CLI',
          collapsable: false,
          children: [
            '',
            '00-Vue-CLI-Doc',
            '01-browser-compatibility',
            '02-html-static-asset',
            '03-work-with-css',
            '04-work-with-webpack',
            '05-mode-and-environment-variables',
            '06-build-target',
            '07-troubleshoting',
            '08-deployment',
          ],
        },
        {
          title: 'VUE-Plugin',
          collapsable: false,
          children: ['vp-00-basic', 'vp-01-prettier', 'vp-02-pwa'],
        },
      ],
      '/vuePress/': [
        {
          title: 'Vue-Press',
          collapsable: false,
          children: [''],
        },
      ],
      '/vueRouter/': [
        {
          title: 'Vue-Router',
          collapsable: false,
          children: [''],
        },
      ],
      '/otherCS/': [
        {
          title: 'other-cs',
          collapsable: false,
          children: ['', 'cors'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
