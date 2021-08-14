# Vue CLI - Basic

- (2021-08-12 작업 기준 버전)
  - node v12.19.1
  - npm 6.14.8
  - @vue/cli 4.5.11

## What is Vue CLI?

- Command Line Interface (명령어 보조도구)
- CLI(@vue/cli)는 전역적으로 설치된 npm 패키지이다.
- project scffoding 제공 (프로젝트 폴더 구조 및 라이브러리 설정)
- 터미널에서 `vue create`, `vue ui` 를 통해 Vue.js 프로젝트를 생성하는 명령을 제공한다.

---

## CLI Service

- CLI Service는 webpack, webpack-dev-server 위에 구축된다.
- 복잡한 webpack 설정을 알아서 해줌
- webpack-dev-server 를 사용하여 **Hot Module Replacement**가 가능

  - HMR(Hot Module Replacement)?

    - HMR은 브라우저를 새로 고치지 않아도 웹팩으로 빌드한 결과물이 웹 어플리케이션에 실시간으로 반영될 수 있게 도와주는 설정이다.
    - 브라우저 새로 고침을 위한 LiveReload 대신 사용할 수 있으며, 웹팹 데브 서버와 함께 사용할 수 있다.
    - 리액트, 앵귤러, 뷰와 같은 프레임워크는 이미 HMR을 사용할 수 있는 로더를 지원하고 있다.
    - 만약 개별적으로 설정하고 싶다면 아래와 같이 설정 할 수 있다.

    ```jsx
    module.exports = {
      devServer: {
        hot: true,
      },
    };
    ```

- 사용 가능한 명령어는 package.json에 정의 되어있다.

  - 명령어

    server — 개발서버 시작

    build — 배포를 위한 빌드

    inspect — 웹팩 내부 설정 보기

    lint — 소스 코드작성 규칙 검사

    [CLI ](https://www.notion.so/a6f97629839c4ee7bade61a4f908cd49)

  - **노드버전 확인**

    node -v

- webpack을 통해서 개발 서버 실행, 빌드를 처리한다.

---

## CLI 사전 작업

- **npm 버전 확인**

  npm -v

- **npm으로 VueCLI 설치**

  npm install -g @vue/cli

- **vue CLI 버전 확인**

  vue —version

- **vue CLI 버전 업데이트**

  npm update -g @vue/cli

- **vue 프로젝트 생성 command**

  vue create 프로젝트명

  vue ui

---

- **🎇Project 만들기**

  → 프로젝트 생성시 환경을 preset시키면 같은 환경의 프로젝트를 만들 수 있다.

  → vue create할 때, capital 사용 불가. warning 뜸.

  → **Vue2 Default**로 생성하면, babel과 ESLint가 깔린다.

  → **Manually select features** 생성을 통해서 다양한 기본환경 플러그인을 설정 할 수 있다.

- 🎇**version 관련 사항**

  → 현재 1.x or 2.x버전은 지원하지 않고 있다.

  ⇒ vue cli ≥ 3 버전을 사용하기 위해서는 `npm install -g @vue/cli-init` 해서 사용해야한다.

  → CLI 4.x 버전 이용하기 위해서는 Node 8, 9 이상의 버전을 사용해야 한다.

---

## CLI 명령어 모음

### CLI 명령어 모음

- `create [options]` : 프로젝트 생성
- `add [options] [pluginOptions]` : npm install / 프로젝트에 plugin 추가
- `invoke [options] [pluginOptions]` : 프로젝트에 plugin 추가
- `inspect [options] [paths..]` : webpack 설정 자세히 보기
- `serve [options] [entry]` : 개발모드, Application 실행, @vue/cli-service-global 전역설치 필수
- `build [options] [entry]` : 운영모드, Application 실행, @vue/cli-service-global 전역설치 필수
- `ui [options]` : vue-cli ui 시작하기
- `init [options] <template> <app-name>` : 다른 Template으로 프로젝트 생성 (legacy API @vue/cli-init 설치 필수)
- `config [options] [value]` : 설정 자세히 보기 및 수정
- `upgrade [semverLevel]` : vue cli service / plugins 업그레이드 (default semverLevel: minor)
- `info` : 디버깅 정보 출력

---

## Vue CLI 플러그인

### Babel \*\*\*\*

- 최신 사양의 JS 를 구형 브라우저에서도 작동하도록 ES5 이하 버전의 JS로 트랜스파일링
- Transpile mordern JS to older version(for compatibility)

### **TypeScript**

- 타입스크립트를 지원한다.
- Add support for the TypeScript Language

### **Progressive Web App(PWA) support**

- **PWA?**

  웹과 네이티브 앱의 기능 모두의 이점을 갖도록 기술과 표준 패턴을 사용하여 개발된 웹 앱이다.

  **웹앱** → 발견이 쉽다. 어플 설치보다 웹 사이트 방문이 쉽고 빠르며 링크 공유가능

  **네이티브 앱** → 운영체제와 잘 통합되어 더 좋은 사용자 경험 제공하며, 설치하여 오프라인 동작 가능.

  ⇒ **PWA**는 동일한 이점을 즐길 수 있는 **웹앱 생성 능력**을 제공한다.

  참고링크 : [https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/소개](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/%EC%86%8C%EA%B0%9C)

- improve performances with features like Web manifest and Service workers

### **Router**

- 동적 페이지로 앱 구조화
- Structure the app with dynamic pages
- **Vue Router History Mode**
- [Router](https://www.notion.so/Router-032c1373e3094efebc45dfc448ed684d)

### Vuex

- 중앙 집중식으로 앱 상태 관리
- Manage the app state with a centralized store
- [Vuex](https://www.notion.so/Vuex-c0693b60b2ab4a598cc8a630675f0697)

### **CSS Pre-processor**

- Sass, Less 또는 Stylus 를 지원하는 CSS 전처리기
- vue-loader은 다른 웹팩 로더를 사용하여 컴포넌트 일부를 처리하도록 해준다.
- Add support for CSS pre-processors like Sass, Less or Stylus
- **Dart-sass / Node-sass의 차이?**

  - Node-Sass or Sass

    - Node-Sass: Fast because of LibSass

      —> 현재 유지관리는 되고 있으나 deprecated(폐지 2020년 12월) 됨.

      Warning: LibSass and Node Sass are deprecated. While they will continue to receive maintenance releases indefinitely, there are no plans to add additional features or compatibility with any new CSS or Sass features. Projects that still use it should move onto Dart Sass.

      [node-sass](https://www.npmjs.com/package/node-sass)

    - Dart-Sass (JS compiled version): Not fast as Node-Sass
    - Dart-Sass (Dart version runs in Dart VM): the fastest

    [The CSS Preprocessor Dilemma : Node-Sass or Dart-Sass](https://itnext.io/the-css-preprocessor-dilemma-node-sass-or-dart-sass-32a0a096572)

### **Linter/Formatter**

- **ESLint**
  - **EsLint**는 ES + Lint이다
  - 코딩 스타일 가이드를 따르지 않거나 문제가 있는 코드나 안티 패턴을 찾기 위해 사용하는 **Javasciprt Linter**이다.
  - 스타일 가이드(built-in rule)을 제공하지만 개발자가 자신의 스타일 가이드를 작성할 수도 있다.
  - 자바스크립트는 컴파일 과정이 없는 인터프리터 언어로 런타임 에러가 발생할 확률이 높아 사전에 에러를 잡아주는 용도로 활용 된다.
  - **Airbnb**나 **google**에서 스타일 가이드를 제공하고 있다.
- **Prettier**
  - Code Formatter(정해진 코딩 스타일을 따르게 변환해주는 도구) 중 하나로 최근 많은 인기를 얻고 있다.
- Check and enforce code quality with ESLint or Prettier

### **Unit Testing**

- 컴포넌트단위 테스트
- 상태, 메소드 컴포넌트 등의 정의된 프로그램 최소 단위들이 독립적으로 정상 동작하는지 확인
- Vue.js 생태계에서 사용되는 일반적인 단위 테스팅 도구에는 Mocha와 Jest가 있다.

[Jest와 Vue Test Utils(VTU)로 Vue 컴포넌트 단위(Unit) 테스트](https://heropy.blog/2020/05/20/vue-test-with-jest/)

**[추천도구]**

- **Mocha**

  핵심 테스트 프레임워크로, describe, it과 같은 테스팅 함수와 테스트 실행 관련 주요 함수를 제공한다.

  [Mocha - the fun, simple, flexible JavaScript test framework](https://mochajs.org/)

- **Jest**

  페이스북에서 만든 테스트 프레임워크로 Vue Test Utils에서 권장하는 테스트 러너

  Jest는 단순성에 초점을 맞춘 JavaScript 테스트 프레임워크이다. 애플리케이션의 단위를 확인하는 기능을 제공하기 위해 테스트의 스냅 샷을 찍는다.

- Add a Unit Testing solution like Jest or Mocha

### **E2E Testing**

- Add an End-to-End testing solution to the app like Cypress or Nightwatch
- 프로젝트단위 테스트(종단간 (E2E) 테스팅)
- E2E 테스트는 애플리케이션의 모든 계층을 검증한다. 프론트엔드 코드 뿐만 아니랏 ㅏ용자가 있을 환경을나타내는 백엔드 서비스 및 인프라가 포함된다. 사용자의 동작이 애플리케이션에 미치는 영향을 테스트한다.

**[테스팅 프레임워크 선택시 유의사항]**

1. 크로스-브라우저 테스팅
   - 여러 브라우저에서 테스트 할 수 있어야 한다.
2. 빠른 피드백
   - 일반적인 E2E 테스팅 프레임워크는 병렬화 같은기능을 추가하여 문제를 해결하는데 도움을 준다. CI/CD 파이프라인(지속적 통합 및 배포)이 더 빠르게 실행한다.
     - CI/CD 파이프라인이란?
3. 헤드리스 모드의 가시성
   - 지속적 통합/배포 파이프라인에서 계속 종단간 테스트를 실행하려면 헤드리스 브라우저에서 실행되는 경우가 많다.(즉, 사용자가 볼 수 있는 브라우저가 열리지 않음). 결과적으로 E2E 테스팅 프레임워크가 오류 발생 원인에 대한 통찰력 제공을 위해 지원하는 기능이 필요하다.

**[추천도구]**

- **Cypress.io**

  개발자가 애플리케이션을 안정적으로 테스트하는 동시에 최고의 개발 경험을 제공하여 개발자 생산성을 높이는 것을 목표로하는 테스팅 프레임워크

- **Nightwatch.js**

  Node.js의 단위, 통합 테스팅은 물론 웹 애플리케이션과 웹 사이트를 테스트하는 데 사용할 수 있는 종단간 테스팅 프레임워크

- **Puppeteer**

  Puppeteer는 브라우저를 제어하기 위한 고급 API를 제공하고 다른 테스트 실행기 (예 : Jest)와 연동하여 애플리케이션을 테스트할 수 있는 노드 라이브러리

- **TestCafe**

  TestCafe는 Node.js 기반의 단순한 프레임워크로, 개발자가 작성하기 쉽고 안정적인 테스트 작성에 집중할 수 있도록 손쉬운 설정을 제공

---

## 기본적인 스카폴딩 구조

1. 📂**node_modules** : 프로젝트를 빌드하는 데 필요한 모든 라이브러리가 저장되는 곳(`npm install` 명령어를 실행하면 폴더가 생성됨)
2. 📂**public** : Webpack을 통해 관리되지 않는 정적 Resource들을 모아두는 곳.

   ⚠️ image나 font 같은 정적 Resource들은 **src/assets** 폴더에 넣어서 Webpack의 관리를 받게하는 것을 추천

3. 📂**src/components** : 어플리케이션에서 사용되는 컴포넌트들을 모아두는 곳
4. 📂**src/router** : Router 설정 파일들을 모아두는 곳 (Client-Side-Routing)
5. 📂**src/store** : Vuex 설정 파일들을 모아두는 곳 (State 관리)
6. 📂**src/views** : Application의 다른 뷰 또는 페이지에 대한 파일을 저장하는 위치
7. 📄**App.vue** : 다른 컴포넌트를 포함하고 있는 최상위(root) 컴포넌트
8. 📄**main.js** : 어플리케이션에 필요한 요소들을 Load하여 렌더링한 후 DOM에 마운트하게 하는 작업 수행

   ```jsx
   import Vue from 'vue';
   import App from './App.vue';
   import router from './router';
   import store from './store';

   Vue.config.productionTip = false;

   new Vue({
     router,
     store,
     render: (h) => h(App),
   }).$mount('#app');
   ```

9. 📄**package.json** : 프로젝트에 필요한 package 들을 정의하고 관리해줌

---
