/**
 * [Vue.config.js]
 * - 옵셔널한 파일이다.
 * - project 루트에 존재하는 경우, @vue/cli-service 가 load한다.
 * -
 *
 */
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/my-hstudy-project' : '/',
  // [웹팩 옵션 추가]--------------------------------------------
  configureWebpack: {
    plugins: [
      // new HtmlWebpackPlugin(),
      new PreloadWebpackPlugin({
        rel: 'prefetch',
        include: 'asyncChunks',
      }),
    ],
  },
  /**
   * [인덱스 생성 비활성화 - 비추천]
   * - 하드 코딩된 파일 이름은 효율적인 캐시 제어를 어렵게 한다.
   */
  // filenameHashing: false,
  // chainWebpack: (config) => {
  //   config.plugins.delete("html");
  //   config.plugins.delete("preload");
  //   config.plugins.delete("prefetch");
  // },
  pages: {
    lintOnSave: process.env.NODE_ENV !== 'production',
    index: {
      // entry for the page
      entry: 'src/index/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    subpage: 'src/subpage/main.js',
  },
  /**
   * [webpack-chain]
   * - node.js 10 version 이상에서 지원한다.
   * - webpack4와 함께 사용하도록 설계된 구성 객체만 생성
   * -
   * @param {*} config
   */

  // [chainWebpack]--------------------------------------------
  chainWebpack: (config) => {
    /**
     * [인라인 파일 크기 제한을 조정]
     * - url-loader로 불러오는 이미지를 10kb 로 제한,
     * - ?? 아직 용도를 이해하지 못했음...
     * ref: https://cli.vuejs.org/guide/html-and-static-assets.html#relative-path-imports
     */
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 10240 }));

    /**
     * [자동 가져오기]
     * - 파일(색상, 변수, 믹스인..)을 자동으로 가져오기 위함
     * - style-resources-loader
     */
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('stylus').oneOf(type)),
    );
    function addStyleResource(rule) {
      rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [path.resolve(__dirname, './src/styles/imports.styl')],
        });
    }
  },
};
