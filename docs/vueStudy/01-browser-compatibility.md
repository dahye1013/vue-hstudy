# Browser Compatibility

## Browserslist

- **브라우저나 Node.js 버전에 대응하여 내부에서 처리해야 할 작업이 다를 때, 설정에 사용한다.**

  — 명시적으로 브라우저나 버전을 특정할 수 있고, 브라우저 통계를 사용하여 설정 가능.

  (통계 정보는 API 서버 아니고, caniuse-lite라는 프로젝트 정적 데이터 이용, 빌드할때 가져옴)

  ⇒ 브라우저 환경을 정의하여 바벨이나 프레임워크 등에서 폴리필 하는데 사용함.

### 쿼리

- 쿼리 문법을 사용하여 브라우저를 정의한다.

  ```json
  ie 10 //인터넷익스플로러(IE) 버전 10을 지원
  ie 6-9  //인터넷익스플로러(IE) 버전 6~9를 지원
  not ie 6-10//인터넷익스플로러(IE) 버전 6~9를 지원안함
  not ie <= 10 ////인터넷익스플로러(IE) 버전 10 미만은 지원 안함

  > 2%  //전 세계 점유율 2% 이상의 브라우저만 지원
  > 2% in KR // 한국(해당 국가코드 나라)에서는 전 세계 점유율 2% 이상의 브라우저만 지원
  > 2% in alt-AS //아시아에서는 전 세계 점유율 2% 이상의 브라우저만 지원

  last 2 Chrome versions  //최근 2개 버전의 Chrome 브라우저를 선택
  last 2 Firefox versions //최근 2개 버전의 Firefox 브라우저를 선택
  not dead // 지원이 중단된 브라우저 지원 안함
  ```

- 조합해서 사용가능

  ```json
  > 1%
  last 2 versions
  not ie <= 10
  ```

### 쿼리를 정의하는 방법

1. `.browserslistrc` 파일안에 정의
2. `package.json` 파일에`browserslist` 키를 사용해 정의

## Polyfills

- 기본 Vue CLI 프로젝트에서는 @vue/babel-preset-app 을 사용하여, @babel/preset-env and the browserslist 설정에 따라서 프로젝트에 해당 폴리필을 수행한다.

### useBuiltIns: 'usage'

기본적으로 **`[useBuiltIns: 'usage'](https://new.babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins-usage)`** 에서 `@babel/preset-env` 로 소스 코드에서 나타나는 언어 특성에 따라 필요한 polifill을 자동으로 검사한다. 이 경우, 최종 번들에 최소한의 폴리필만 포함되게 된다. 하지만, **종속성 중 하나에 폴리필에 대한 특정 요구 사항이 있는 경우, 기본적으로 Babel이 이를 감지 할 수 없다.**

만약 다음과 같은 폴리필이 종속성을 가질때, 선택할 수 있는 옵션들이 있다.

1. **종속성이 당신의 대상으로 하는 환경을 지원하지 않는 ES 버전으로 작성된 경우.**

   - 해당 종속성을  `vue.config.js` 에서 **`[transpileDependencies](https://cli.vuejs.org/config/#transpiledependencies)`** 옵션에 추가한다

     - `**vue.config.js**`

       `vue.config.js` is an optional config file that will be automatically loaded by `@vue/cli-service` if it's present in your project root (next to `package.json`). You can also use the `vue` field in `package.json`, but do note in that case you will be limited to JSON-compatible values only.

       The file should export an object containing options:

       [Configuration Reference | Vue CLI](https://cli.vuejs.org/config/#vue-config-js)

2. **종속성이 ES5 코드를 제공하고 필요한 폴리필을 명시적으로 나열하는 경우**
3. **종속성이 ES5 코드를 제공하지만 폴리필 요구 사항을 명시적으로 나열하지 않고 ES6+ 기능을 사용하는 경우(예: Vuetify)**
4.

If one of your dependencies need polyfills, you have a few options:

1. **If the dependency is written in an ES version that your target environments do not support:** Add that dependency to the **`[transpileDependencies](https://cli.vuejs.org/config/#transpiledependencies)`** option in `vue.config.js`. This would enable both syntax transforms and usage-based polyfill detection for that dependency.
2. **If the dependency ships ES5 code and explicitly lists the polyfills needed:** you can pre-include the needed polyfills using the **[polyfills](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#polyfills)** option for `@vue/babel-preset-app`. **Note that `es.promise` is included by default because it's very common for libs to depend on Promises.**

[GitHub - browserslist/browserslist: 🦔 Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env](https://github.com/browserslist/browserslist)

## 모던 모드 (빌드)

Babel을 사용하면 ES20215+의 모든 최신 언어 기능을 활용할 수 있지만, 이전 브라우저를 위해 트랜스파일 및 폴리필 번들을 제공해야함을 의미하기도 한다. 트랜스파일 된 번들을 종종 원래 ES20215+ 코드보다 장황하며 구문 분석 및 실행 속도가 느리다.

오늘날 내 부분의 최신 부라우저가 ES20215에 대한 적절한 지원을 제공하고 있는 것을 감안할 때 이전 브라우저를 지원하기 위해 더 무겁고 비효율적인 코드를 제공하는 것은 낭비다.

⇒ Vue CLI는 이 문제를 위해 '**모던 모드**'를 제공한다.

**[ Production 용으로 빌드하는 명령어 ]**

```bash
vue-cli-service build --modern
```

해당 명령어를 실행하면, Vue CLI는 두 가지 버전의 앱을 생성한다.

1. ES 모듈 지원하는 최신 브라우저를 대상으로 하는 최신 번들
2. ES 모듈을 지원하지 않는 이전 브라우저 대상으로하는 레거시 번들

- 최신 번들은 `<script type="module">`지원하는 브라우저에서 와 함께 로드됩니다 . `<link rel="modulepreload">`대신 사용하여 미리 로드 됩니다.
- 레거시 번들은 `<script nomodule>` 과 함께 로드되며, ES모듈을 지원하는 브라우저에서 무시된다.
- `<script nomodule>`Safari 10 의 수정 사항 도 자동으로 주입된다.

— Hello World 앱의 경우 최신 번들은 이미 16% 더 작다. 프로덕션에서 최신 번들은 일반적으로 구문 분석 및 평가 속도가 훨씬 빨라져 앱의 로드 성능이 향상된다.

>

 <script type="model"> 는 CORS가 항상 활성화된 상태로 로드됩니다. 즉, 서버에서 유효한 CORS 헤더, 예를 들면 `Access-Control-Allow-Origin: *` 을 받아야합니다.
