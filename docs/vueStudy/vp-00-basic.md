# Plugins

Vue CLI는 플러그인 기반 아키텍처를 사용한다. 새로 만든 프로젝트의 패키지를 검사하는 경우 `package.json` 를 확인하면, `@vue/cli-plugin-`.로시작하는 종속성을 찾을 수 있다.

플러그인은 내부 웹 팩 구성을 수정하고 `'vue-cli-service'`에 명령을 주입할 수 있다. 프로젝트 생성 프로세스 중에 나열된 대부분의 기능은 플러그인으로 구현된다.

- **[Babel](https://cli.vuejs.org/core-plugins/babel.html)**
- **[TypeScript](https://cli.vuejs.org/core-plugins/typescript.html)**
- **[ESLint](https://cli.vuejs.org/core-plugins/eslint.html)**
- **[PWA](https://cli.vuejs.org/core-plugins/pwa.html)**
- **[Jest](https://cli.vuejs.org/core-plugins/unit-jest.html)**
- **[Mocha](https://cli.vuejs.org/core-plugins/unit-mocha.html)**
- **[Cypress](https://cli.vuejs.org/core-plugins/e2e-cypress.html)**
- **[Nightwatch](https://cli.vuejs.org/core-plugins/e2e-nightwatch.html)**
- **[WebdriverIO](https://cli.vuejs.org/core-plugins/e2e-webdriverio.html)**

---

Vue-CLI 로 프로젝트 생성시에 사용되는 manually select features 위주로 알아보기

vue create 시에 확인 가능한 플러그인들은 VUE-CLI Basic에 정리되어 있음.

이외에 자세한 옵션 알아보는 경우에만 여기에 내용 추가
