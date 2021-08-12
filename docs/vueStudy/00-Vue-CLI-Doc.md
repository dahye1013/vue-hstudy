# Vue Cli - Doc

## Vue.js 개발 기본도구로서의 특징

---

- **풍부한 기능**

  — Babel, TypeScript, ESLint, PostCSS, PWA, Unit Testing, End-to-end Testing

- **확장성**

  — 플러그인 시스템을 통해서 커뮤니티에서 재사용 가능한 솔루션을 공유할 수 있다.

- **Eject 불필요**

  — Vue Cli는 ejct해서 할 필요없이 설정할 수 있다. 이를 통해서 프로젝트를 갱신할 수 있다.

- **그래픽 사용자 인터페이스**

  — 그래픽 인터페이스는 통해서 프로젝트를 만들고 개발 할 수 있다.

  — vue ui

- **인스턴스 프로토타이핑**

  — 싱글 Vue 파일을 통해서 영감을 실현시킬 수 있다.

- **미래 지향**

  — ES2015 코드, 혹은 ES2015 Web Components 구성 요소 구성한다.

## 시작하기

---

1. 설치

   ```jsx
   vue create my-project
   # OR
   vue ui
   ```

2. 프로젝트 생성

   ```jsx
   vue create my-project
   # OR
   vue ui
   ```

## 소개

---

- Vue CLI는 Vue의 빠른 속도로 개발할 수 있게 해주는 완전 시스템이다.

- `@vue/cli` 를 통해서 인터렉티브한 스카폴팅 프로젝트를 생성
- `@vue/cli` + `@vue/cli-service-global` 통해서 빠르게 설정 파일의 프로토타이핑을 만들 수 있다.
- 런타임 의존관계 (`@vue/cli-service`)
  1. 업그레이드가 가능하다
  2. 웹팩 기반으로 적절한 기본 설정이 구성된다.
  3. 프로젝트 내의 설정파일에서 설정을 진행 할 수 있다.
  4. 플로그인을 통해 확장 할 수 있다.
- 프론트엔드 생태에서 가장 좋은 툴을 집약하여, 풍부한 플러그인을 집합
- Vue.js 제작하고 관리하기 위한 완전한 그래픽 유저 인터페이스이다.

Vue CLI 의 목적은 Vue 생태계를 위한 표준 Tool이 되는 것을 목표로 하고 있다. 다양한 빌드 도구가 기본 설정과 함께 원활하게 작동하도록 하여, 사용자가 설정을 잡는데 많은 시간을 소비하는 대신에 앱을 만드는데 집중 할 수 있도록 해준다. 또한, 각 Tool을 꺼내지 않고도 설정파일을 수정 할 수 있게 한다.

### 컴포넌트 시스템

- Vue CLI에는 몇가지 독립적인 부분이 있다. — 만약 당신이 원코드를 본다면, monorepo containing에서 패키지들을 분리해서 배포하는 것을 확인 할 수 있을 것이다.

  [vue-cli/packages/@vue at dev · vuejs/vue-cli](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue)

### CLI

CLI(`@vue/cli`) 는 전역적으로 설치된 npm 패키지이고, terminal에 vue 관련된 명령어를 제공한다. `vue create` 를 통해서 프로젝트를 신속하게 스카폴드하여 생성해주거나, `vue sesrve`를 통해 새로운 아이디어를 즉각적으로 프로토타입화 할 수 있도록 한다. `vue ui` 를 통해서 그래픽 사용자 인터페이스로 프로젝트를 관리 할 수 있다.

### CLI Service

CLI Service는 development dependency 이다. @vue/cli로 만들어진 모든 프로젝트에 로컬로 설치되는 npm 패키지이다.

The CLI Service 는 webpack 과 webpack-dev-server를 기반으로 구성되어있고, 하단 내용을 포함한다.

1. 코어한 서비스는 CLI 플러그인을 통해서 load된다.
2. 대부분 앱에 최적화 된 내부 웹 팩 구성
3. vue-cli-service 명령어로 `serve` `build` `inspect` 이 제공된다.

만약 create-react-app에 익숙하다면, `@vue/cli-service` 기능 집합은 다르지만 대응 스크립트와 거의 같다는 것을 알 수 있다.

- **CLI Service 사용법**

[CLI Service | Vue CLI](https://cli.vuejs.org/guide/cli-service.html)

### CLI Plugins

CLI 플러그인은 Babel/TypeScript 변환, ESLint 통합, 장치 Unit Testing, End-to-end Testing 같은 Vue CLI 프로젝트에 선택적 기능을 제공하는 npm 패키지이다. Vue CLI 플러그인의 이름은 `@vue/cli-plugin-`(기본 제공 플러그인) 또는 `vue-cli-plugin-`(커뮤니티 플러그인)으로 시작되므로 쉽게 찾을 수 있다.

프로젝트 내에서 `vue-cli-service` 명령 실행시, 자동으로 프로젝트의 `package.json`에 나열된 모든 CLI 플러그인이 자동으로 확인되고 로드된다.

플러그인은 프로젝트 생성 프로세스의 일부로 포함하거나 나중에 프로젝트에 추가할 수 있다. 또한 재사용 가능한 사전 설정으로 그룹화할 수 있다. 이러한 사항에 대해서는 플러그인 및 사전 설정 섹션에서 자세히 설명한다.

### **Plugins and Presets 가이드**

[Plugins and Presets | Vue CLI](https://cli.vuejs.org/guide/plugins-and-presets.html#plugins)

[插件和 Preset | Vue CLI](https://cli.vuejs.org/zh/guide/plugins-and-presets.html)

## 설치

‼️**Node Version Requirement**

Vue CLI 4.x requires **[Node.js](https://nodejs.org/)** version 8.9 or above (v10+ recommended). You can manage multiple versions of Node on the same machine with **[n](https://github.com/tj/n)**, **[nvm](https://github.com/creationix/nvm)** or **[nvm-windows](https://github.com/coreybutler/nvm-windows)**.

**npm 패키지 다운로드**

```jsx
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

→ 설치후 vue 명령어에 접근 할 수 있다.

**버전 확인 하는 명령어**

```bash

vue --version
```

**CLI 패키지 업그레이드 명령어**

```bash
npm update -g @vue/cli

# OR
yarn global upgrade --latest @vue/cli
```

- 위에 표시된 업그레이드 명령은 글로벌 Vue CLI 설치에 적용된다. 프로젝트 내에서 하나 이상의 @vue/cli 관련 패키지(@vue/cli-plugin- 또는 vue-cli-plugin-으로 시작하는 패키지 포함)를 업그레이드하려면 프로젝트 디렉토리 내에서 vue 업그레이드를 실행해야 한다.

## Instant Prototyping

vue serve와 vue build 명령을 사용하여 단일 \*. vue 파일을 빠르게 개발할 수 있습니다. 이 경우 확장 전체를 추가 설치

```bash
npm install -g @vue/cli-service-global
```

`vue serve` 의 단점은 전역적으로 설치된 종속성에 의존

신속한 시제품 제작에만 권장

## 프로젝트 생성하기

### vue create

---

- 프로젝트 생성

```bash
vue create hello-world
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/437f978c-0904-4b64-a519-29e15fdc0c6b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/437f978c-0904-4b64-a519-29e15fdc0c6b/Untitled.png)

1. default preset Babel + ESLint setup
2. Manually select features - 내가 원하는 항목으로 선택하여 생성

[**~/.vuerc]\*\*

preset을 저장하면 내 로컬 컴퓨터 directory에 `.vuerc` 이름으로 json file 형태로 저장되어져 있다. presets/option을 수정, 저장시 이 파일이 수정된다.

### Using the GUI

- 하단 명령어를 통해 브라우저에서 GUI 버전으로 프로젝트를 관리 할 수 있다.

```bash
Using the GUI
```

### Pulling 2.x Templates (Legacy)

- Vue CLI >= 3 버전을 하단 방법으로 사용 할 수 있다.

```bash
npm install -g @vue/cli-init
# vue init now works exactly the same as vue-cli@2.x
vue init webpack my-project
```

## 플러그인과 프리셋

### 플러그인

Vue CLI 는 플러그인 기반 아키텍처를 사용한다. 새로 생성된 프로젝트의 `package.json` 을 확인하면 `@vue/cli-plugin-.` 로 시작하는 dependencies를 찾을 수 있다.

플러그인은 내부 웹팩 설정을 수정하고, `vue-cli-service` 명령어를 주입할 수 있게 한다. 대부분 프로젝트 생성중에 나열된 기능은 플러그인으로 구현된다.

플러그인 기반 아키텍처는 Vue CLI를 유역하고, 확장성 있게 한다.

### **플러그인 개발 가이드**

[Plugin Development Guide | Vue CLI](https://cli.vuejs.org/dev-guide/plugin-dev.html)

### 현재 프로젝트에 플러그인 설치하기

각 CLI 플러그인은 (파일 생성용) 생성기와 (웹팩의 핵심 설정과 명령을 변경하기 위한) 실행 중인 플러그인을 포함합니다. vue create를 사용하여 새 프로젝트를 만들 때 선택한 기능에 따라 일부 플러그인이 미리 설치됩니다. 생성된 항목에 플러그인을 설치하려면 vue add 명령을 사용해도 됩니다:

```bash
vue add eslint
```

— `vue add`는 Vue CLI 플러그인을 설치하고 호출하도록 특별히 설계되었습니다. 일반 npm 패키지를 대체하는 것은 아닙니다. 일반 npm 패키지의 경우 선택한 패키지 관리자를 사용해야 합니다.

> 경고 : `vue add`를 실행하기 전에 프로젝트의 *현재 상태를 커밋*하는 것이 좋습니다. 이 명령은 플러그인의 파일 생성기를 호출하고 기존 파일을 변경할 수 있습니다.

다음과 같은 명령어로도 실행 가능하다.

```bash
vue add @vue/cli-plugin-eslint
```

Without the `@vue` prefix, the command will resolve to an unscoped package instead. For example, to install the 3rd party plugin `vue-cli-plugin-apollo`:

`# installs and invokes vue-cli-plugin-apollo vue add apollo`

You can also use 3rd party plugins under a specific scope. For example, if a plugin is named `@foo/vue-cli-plugin-bar`, you can add it with:

`vue add @foo/bar`

You can pass generator options to the installed plugin (this will skip the prompts):

`vue add eslint --config airbnb --lintOn save`

If a plugin is already installed, you can skip the installation and only invoke its generator with the `vue invoke` command. The command takes the same arguments as `vue add`.

## CLI 서비스

### 명령어 사용

Vue CLI 프로젝트에서 `@vue/cli-service` 는 `vue-cli-service` 를 위한 설치 명령어이다.

npm script를 통해서 `vue-cli-service`、혹은 `./node_modules/.bin/vue-cli-service` 접근하는 명령어를 만들 수 있다.

하단은 기본적인 프로젝트 pacakge.json 의 preset이다.

```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  }
}
```

이를 통해서 실제 실행시

```bash
npm run serve
# OR
yarn serve
```

만약 npx를 사용한다면 (npm 최신판을 사용해야만 함), 다음과 같이 실행 할 수도 있다.

```bash
npx vue-cli-service serve
```

### 참고링크

[Vue CLI](https://cli.vuejs.org/zh/)
