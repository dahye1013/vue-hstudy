# 소개

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

## 컴포넌트 시스템

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
