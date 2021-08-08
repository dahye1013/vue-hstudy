# HTML 및 정적자산

## HTML

### 인덱스 파일(The Index File)

파일 `public/index.html`은 **[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)** 으로 처리될 템플릿이다 . 빌드하는 동안 자산 링크가 자동으로 삽입된다. 또한 Vue CLI는 리소스 힌트( `preload/prefetch`), 매니페스트/아이콘 링크(PWA 플러그인 사용 시), 빌드 중에 생성된 JavaScript 및 CSS 파일에 대한 자산 링크 도 자동으로 삽입한다.

### 보간(Interpolation)

인덱스 파일이 템플릿으로 사용되기 때문에 lodash 템플릿 구문을 사용하여 값을 보간 할 수 있다.

- `<%= VALUE %>`이스케이프 처리되지 않은 보간
- `<%- VALUE %>`HTML 이스케이프 보간
- `<% expression %>`JavaScript 제어 흐름용.

기본값으로 노출 되고 있는 `html-webpack-plugin` 외에도 client-side env 를 통해서 연결 할 수 있다.

[Modes and Environment Variables | Vue CLI](https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code)

같이보면 좋은 정보 — publicPath

[Configuration Reference | Vue CLI](https://cli.vuejs.org/config/#publicpath)

### Preload

**`[<link rel="preload">](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)`**

- preload 는 선언적인 fetch이다. Document의 onload 이벤트를 막지 않으면서 브라우저가 자원을 요청하도록 강제 할 수 있다.
- preload는 브라우저에게 페이지에 필요한 자원을 일찍 fetch 하라는 지침이다. 현재 페이지에서 사용될 것이 확실한 리소스 들을 `preload` 하는 것이다. 브라우저에 현재 페이지에서 필요한 리소스를 빨리 가져오게 한다.

**[Vue version]**

Vue 에서 **`[<link rel="preload">](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)`** 페이지가 로드된 직후에 필요한 리소스를 지정하는데 사용되는 리소스 힌트 유형이다. 브라우저의 기본 렌더링 기계가 작동하기 전에 페이지 로드 수명 주기 초기에 미리 로드를 시작시킨다.

기본적으로 Vue CLI 앱은 앱의 초기 렌더링에 필요한 모든 파일에 대한 사전 로드 힌트를 자동으로 생성한다. 힌트는 @vue/preload-webpack-plugin을 사용하여 주입 되며 chainWebpackas 를 통해 수정/삭제할 수 있다.

[GitHub - vuejs/preload-webpack-plugin: A Webpack plugin for wiring up ` ` (and prefetch) - supports async chunks](https://github.com/vuejs/preload-webpack-plugin)

### **Prefetch**

**`[<link rel="prefetch">](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ)`**

- 미래에 사용될 것이라고 예상되는 리소스들을 prefetch 해야 한다. 브라우저는 미래에 사용 될 리소스들을 가져와 캐시에 저장한다.

  ⇒ 사용자가 다음에 할 행동을 미리 준비하는데 적합한 기능이다.

- prefetch는 자원이 필요할 수 있다는 것을 브라우저에게 힌트를 주지만, 로딩할지 말지는 브라우저가 결정한다.

**[Vue version]**

페이지 로딩이 완료 된 후에, 사용자가 방문하게 될 곳에 대해 미리 알아두는 resource hint의 일종이다. 기본적으로 Vue CLI를 사용하면, async check로 생성된 모든 자바스크립트 파일을 (동적 import()를 통해서 code splitting된 결과물) 사용하여 prefetch를 생성한다.

이러한 힌트들은 **[@vue/preload-webpack-plugin](https://github.com/vuejs/preload-webpack-plugin)** 를 사용하여 주입 할 수 있고, `chainWebpack` 의 `config.plugin('prefetch')` 로 수정, 삭제할 수 있다.

```jsx
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch');

    // or:
    // modify its options:
    config.plugin('prefetch').tap((options) => {
      options[0].fileBlacklist = options[0].fileBlacklist || [];
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/);
      return options;
    });
  },
};
```

prefetch 플러그인이 비활성화된 경우, 웹팩 내부에서 수동적으로 필요한 부분을 등록 할 수 있다.

```jsx
import(/* webpackPrefetch: true */ './someAsyncComponent.vue');
```

> prefetch 링크는 대역폭을 크게 소모한다. 만약 사용해야 할 async chunk가 많거나 모바일 유저라서 대역폭 인식(bandwidth-aware)이 크다면, prefetch링크를 끄고 수동으로 등록해야 할 수 도 있다.

### Disable Index Generation

Vue CLI를 사용할 때, 백엔드가 존재한다면 굳이 index.html이 필요 없이 server-rendered page를 통해서 assets을 생성 할 수도 있다. 이런 경우 vue.config.js 를 통해 index.html을 생성하지 않도록 할 수 있다.

```jsx
// vue.config.js
module.exports = {
  // disable hashes in filenames
  filenameHashing: false,
  // delete HTML related webpack plugins
  chainWebpack: (config) => {
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
};
```

모든 app이 SPA일 필요는 없다. Vue CLI는 vue.config.js에서 페이지 옵션을 사용하여 다중 페이지 앱을 만들 수 있게 했다. 빌드된 앱은 최적의 로드 성능을 위해 복수의

### Vue.js의 Lazy load

Single Page Application(spa)의 고질적인 문제는 소스 코드가 하나로 뭉쳐져서 사용자가 처음 웹 사이트에 접속했을 때 큰 파일을 다운로드하고 파싱하느라 초기 렌더링이 느리다는 것이다.

## Static Assets Handling(정적 자산 핸들링)

정적 자산은 두 가지 방법으로 핸들링 할 수 있다.

1. **JavaScript에서 import 하거나, 상대 경로를 통해 템플릿/CSS 에서 참조된다.**

   — 이러한 참조는 webpack에서 처리된다.

2. **public 디렉토리에 배치되고 절대 경로를 통해 참조된다.**

   — webpack 을 거치지 않고, 복사된다.

### 상대경로 가져오기(Relative Path Imports)

.JavaScript, CSS 또는 \*.vue파일 내에서 정적 자산을 참조할 때, 자산은 웹팩의 종속성 그래프에 포함되는 자산을 가진다. 이 컴파일 과정 등 모든 애셋 URL `<img src="...">` `background: url(...)`및 CSS가 `@import`되는 모듈 의존성으로 해결한다.

예로 다음의 코드는

```jsx
<img src="./image.png">
```

이처럼 컴파일 된다.

```jsx
h('img', { attrs: { src: require('./image.png') } });
```

내부적으로는 `file-loader`버전 해시를 사용하여 최종 파일 위치를 결정하고 공개 기본 경로를 수정하고 `url-loader`4kb보다 작은 자산을 조건부로 인라인하여 HTTP 요청을 줄이는데 사용된다.

**[chainWebpack을](https://cli.vuejs.org/config/#chainwebpack)** 통해 인라인 파일 크기 제한을 조정할 수 있다 . 예를 들어 제한을 10kb로 대신 설정하려면 다음을 수행한다.

```bash
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))
  }
}
```

### URL 규칙 (URL Transform Rules)

- URL이 절대 경로(예: `/images/foo.png`) 유지
- URL이  `.`로 시작하면, 상대 모듈 요청으로 해석되고, 파일 시스템의 폴더 구조를 기반으로 확인한다.
- URL이 `~` 로 시작하면, 뒤의 모든 항목은 모듈 요청으로 해석된다.  노드 모듈 내에서 자산을 참조할 수도 있다.

  ```html
  <img src="~some-npm-package/foo.png" />`
  ```

- URL이 로 시작 `@`하면 모듈 요청으로도 해석됩니다. Vue CLI는 기본적 `@`으로 `<projectRoot>/src` 처럼 루트에 있는 것을 참조하기에 좋다.

### The public Folder

public 폴더에 있는 모든 정적 자산은 웹팩은 거치지 않고, 단순히 복사된다. 절대 경로를 사용하여 참조해야 한다.

모듈로서 자산을 importing에서 사용하는 것을 추천한다 (we recommend importing assets as part of your module dependency graph). 그렇게 되면 웹팩을 통하면서 몇가지 이점을 가지게 된다.

- 추가 네트워크 요청을 피하기 위해 스크립트와 스타일시트가 축소되고, 함께 번들 된다.
- 파일이 없으면 사용자에게 404 오류 대신 컴파일 오류를 발생시킨다.
- 결과 파일 이름에는 콘텐츠 해시가 포함되므로 브라우저가 이전 버전을 캐싱하는 것에 대해 걱정할 필요가 없다.

public 디렉토리는 절대 경로를 통해 어디에 배치될 것인지를 확인한다. 도메인 이름의 루트에 배치되어 있지 않다면, URL에 publicPath 접두사를 설정해야 한다.

[public path 설정법 관련 링크]

[Configuration Reference | Vue CLI](https://cli.vuejs.org/config/#publicpath)

- publicPath설정법

`public/index.html`이나 `html- webpack-plugin`을 통해 템플릿으로 사용되는 HTML 파일에서 `<% = BASE_URL% >` 을 통해서 링크 접두사를 설정해야 한다.

```html
<link rel="icon" href="<%= BASE_URL %>favicon.ico" />
```

탬플릿에서는 URL 주소를 이처럼 표시할 수 있다.

```jsx
data () {
  return {
    publicPath: process.env.BASE_URL
  }
}
```

```jsx
<img :src="`${publicPath}my-image.png`">
```

### public folder 사용시

- 빌드 출력에 특정 이름의 파일이 필요합니다.
- 수천 개의 이미지를 가지고 있으며 해당 경로를 동적으로 참조해야 합니다.
- 일부 라이브러리는 웹 팩과 호환되지 않을 수 있으며 다른 옵션은 없으며 `<script>` 태그로 포함할 수 있습니다.
