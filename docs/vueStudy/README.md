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

### Vue CLI 플러그인

1. **Babel**
   - 최신 사양의 JS 를 구형 브라우저에서도 작동하도록 ES5 이하 버전의 JS로 트랜스파일링하는 것이다.
   - Transpile mordern JS to older version(for compatibility)
2. **TypeScript**
   - 타입스크립트를 지원한다.
   - Add support for the TypeScript Language
3. **Progressive Web App(PWA) support**
   - PWA?
   - improve performances with features like Web manifest and Service workers
4. **Router**
   - 동적 페이지로 앱 구조화
   - Structure the app with dynamic pages
   - **Vue Router History Mode**
   - [Router](https://www.notion.so/Router-032c1373e3094efebc45dfc448ed684d)
5. **Vuex**
   - 중앙 집중식으로 앱 상태 관리
   - Manage the app state with a centralized store
   - [Vuex](https://www.notion.so/Vuex-c0693b60b2ab4a598cc8a630675f0697)
6. **CSS Pre-processor**
   - Sass, Less 또는 Stylus 를 지원하는 CSS 전처리기
   - vue-loader은 다른 웹팩 로더를 사용하여 컴포넌트 일부를 처리하도록 해준다.
   - Add support for CSS pre-processors like Sass, Less or Stylus
   - **Dart-sass / Node-sass의 차이?**
7. **Linter/Formatter**
   - **ESLintf**
   - **Prettier**
   - Check and enforce code quality with ESLint or Prettier
8. **Unit Testing**

   - 컴포넌트단위 테스트 — 상태, 메소드 컴포넌트 등의 정의된 프로그램 최소 단위들이 독립적으로 정상 동작하는지 확인

   [Jest와 Vue Test Utils(VTU)로 Vue 컴포넌트 단위(Unit) 테스트](https://heropy.blog/2020/05/20/vue-test-with-jest/)

   - **Mocha**
   - **Chai**
   - **Jest**
   - Add a Unit Testing solution like Jest or Mocha

9. **E2E Testing**
   - 프로젝트단위 테스트
   - Add an End-to-End testing solution to the app like Cypress or Nightwatch

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
