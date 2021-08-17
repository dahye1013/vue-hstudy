# Build Target

`vue-cli-service-build` 실행할때, `—target` 을 통해서 특정 타겟을 지정하여 빌드할 수 있다. 동일한 코드베이스를 사용하여 다양한 사용 가능한 빌드를 생성할 수 있다. 

## App

app은 빌드의 기본 대상이다.

- index.html 은 자산과 리소스 힌트와 함께 주입된다.
- vendor library 들은 캐싱을 위해 분리되어 chunk에 들어간다.
- 4kb 미만의 static asset 들은 JavaScript 안으로  들어간다.
- public 안에 들어있는 static asset들은 ouput 디렉토리로 복사된다.

## Library

> **Vue 종속성에 대한 참고사항**
lib 모드에서는 Vue가 외부화된다. 즉, Vue를 import 해도 번들은 Vue를 번들링하지 않습니다. 만약 lib이 번들로서 사용된다면, 그것은 번들을 통해서 Vue를 종속성으로서 불러오기 위함이다. 그렇지 않으면, Vue는 전역변수가 된다. 
이러한 상황을피하기 위해서 `—inline-vue` 플래그를 build 할 때, 명령어를 사용한다.
`vue-cli-service build --target lib --inline-vue`

libarary를 사용하기 위한 entry를 빌드 할 수 있다,

```bash
npx vue-cli-service build --target lib --name myLib [entry]
```

entry는 `.js` 이거나 `.vue` 일 수 있다. 만약에 특별하게 잡힌 entry가없다면 `src/App.vue` 를 사용하면 된다.

lib 빌드 결과물;

- `dist/myLib.common.js`:  번들러를 통해서 소모되는 CommonJS 번들이다. (안타깝게도, 웹팩은 현재 ouput 포맷에 ES 모듈을 지원하지 않는다.)
- `dist/myLib.umd.js`: 브라우저나 AMD 로더를 통해 소모되는 UMD 번들이다.

    [AMD](https://d2.naver.com/helloworld/591319) 참고링크

- `dist/myLib.umd.min.js`:  UMD build 로 최소화 된 버전이다.
- `dist/myLib.css`: CSS 파일이 추출 된 버전 ( 설정을 통해 인라인에서도 강제로 뽑아낼 수 있다. `css: { extract: false }` in `vue.config.js`)

> ‼️**경고**
만약 라이브러리나 monorepo 디자인패턴으로 개발하는 경우, css를 import 해오는 것이 사이드 이펙트를 발생시키는지 확인해야한다.  `package.json` 에서 "`sideEffects": false`를 제거하는 것을 확인하라. 그렇지 않으면, 웹팩에서 production 빌드할때 css chunks 를 뺄 것이다.

### Vue vs. JS/TS Entry Files

`.vue` 파일을 entry로 사용할 때, 라이브러리는 Vue 컴포넌트를 바로 노출시킨다. 컴포넌트는  언제나 export되기 때문이다.

하지만, `.js`나 `.ts` 파일을 entry로 사용하는 경우,  이름이 있는 export가 된다. 그래서 라이브러리가 모듈로서 노출된다. 이것은 기본 export가 라이브러리에서 umd 빌드에서   `window.yourLib.default`로서 접근 가능하거나, CommonJS 빌드에서 `const myLib = require('mylib').default`로 접근 가능하다는 것을 의미한다. 만약  당신이 이름이있는 export를 기본 export로 바로 노출하고자 하면, `vue.config.js` 에서 webpack 설정을 통해 할 수 있다. 

## Web Component

> Note on Compatibility
웹 컴포넌트는 IE11 미만에서는 지원하지 않는다.

> Note on Vue Dependency
웹 컴포넌트 모드에서 Vue는 외부화된다. Vue뿐만 아니라, Vue를 imports하는 코드조차도 번들하지 않는다. 이때 번들은 Vue를 글로벌 변수처럼 호스트 페이지로 여긴다.
이것을 피하고 싶다면 `—inline-vue` 플래그를 빌드할때 삽입하라.

```jsx
vue-cli-service build --target wc --inline-vue
```

웹컴포넌트 사용시 싱글 entry를 빌드할 수 있다.

```jsx
vue-cli-service build --target wc --name my-element [entry]
```

‼️ entry는 *`.vue` 파일이어야만 한다. Vue CLI 는 자동으로 컴포넌트를 웹컴포넌트로 래핑하고 등록하여, `main.js`에 직접 등록할 필요 없게 한다. `main.js` 를 demo 앱으로 단독으로 사용할 수 있다.

이 빌드는 싱글 자바스크립트 파일을 생성하고 모든 것이 인라인이다.(가장 작은 버전이다). 페이지에 포함된 스크립트는 `@vue/web-component-wrapper`를 사용하여 대상 Vue 구성 요소를 래핑하는 `<my-element>` 사용자 지정 요소를 등록한다.  래퍼는 속성, 속성, 이벤트 및 슬롯을 자동으로 프록시한다. 자세한 내용은 `@vue/web-component-wrapper` 문서를 참조.

[GitHub - vuejs/vue-web-component-wrapper: Wrap a Vue component as a web component / custom element.](https://github.com/vuejs/vue-web-component-wrapper)

‼️ 번들은 페이지에서  전역에서 사용할 수 있는 Vue에 의존한다.

— ⁉️

이 모드에서는 사용자가 일반 DOM 요소로 Vue 구성 요소를 사용할 수 있도록 한다.

```html
<script src="https://unpkg.com/vue"></script>
<script src="path/to/my-element.js"></script>

<!-- 可在普通 HTML 中或者其它任何框架中使用 -->
<my-element></my-element>
```

### Bundle that Registers Multiple Web Components

Web Components 를 번들하여 빌드할 때,  glob 방식을 통해서 여러개의 컴포넌트를 지정할 수 있다.

```html
vue-cli-service build --target wc --name foo 'src/components/*.vue'
```

웹 구성요소를 여러 개 빌드할 때, —name 이 접두사로 사용하여 커스텀 엘리먼트 이름을 컴포넌트 파일 이름을 암시하여 사용 할 수 있다. 예를 들어 `—name foo` 라는 엘리먼트를 HelloWorld.vue 라는 컴포넌트에서  등록하면 , 커스텀 엘리먼트는 `<foo-hello-world>` 로 등록된다.

### Async Web Component

여러 웹 컴포넌트를 대상으로 하는 경우, 번들은 상당히 커질 수 있고, 당신이 등록한 번들에서 일부 컴포넌트만을 사용할 수도 있다. async(비동기) 웹컴포넌트 모드에서는 모든 컴포넌트 간의 공유 런타임을 제공하고 코드 분할 번들을 생성한다. 그리고, 모든 커스텀 엘리먼트를 먼저 등록한다. 실제 컴포넌트의 실행은 on-demand 형식으로 해당되는 커스텀 엘리먼트가 페이지에서 사용되는 경우에만 가져온다.

```html
vue-ci-service build --target wc-async --name foo 'src/components/*.vue'
```

```html
File                Size                        Gzipped

dist/foo.0.min.js    12.80 kb                    8.09 kb
dist/foo.min.js      7.45 kb                     3.17 kb
dist/foo.1.min.js    2.91 kb                     1.02 kb
dist/foo.js          22.51 kb                    6.67 kb
dist/foo.0.js        17.27 kb                    8.83 kb
dist/foo.1.js        5.24 kb                     1.64 kb
```

이 경우, 페이지에는 Vue와 엔트리 파일만 존재하면 된다.

```html
<script src="https://unpkg.com/vue"></script>
<script src="path/to/foo.min.js"></script>

<!-- foo-one's implementation chunk is auto fetched when it's used -->
<foo-one></foo-one>
```