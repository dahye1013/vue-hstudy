# VuePress

## VuePress?

VuePress는 최소한의 정적 사이트 생성기 의 두 부분으로 구성됩니다.  Vue 기반 테마 시스템 및 플러그인 API , 기술 문서 작성에 최적화된 기본 테마를 사용합니다.  Vue 자체 하위 프로젝트의 문서화 요구 사항을 지원하기 위해 만들어졌습니다.

VuePress에서 생성된 각 페이지에는 사전 렌더링된 자체 정적 HTML이 있어 뛰어난 로딩 성능을 제공하고 SEO 친화적입니다. 그러나 페이지가 로드되면 Vue가 정적 콘텐츠를 인수하여 완전한 단일 페이지 애플리케이션(SPA)으로 전환합니다. 사용자가 사이트를 탐색할 때 요청에 따라 추가 페이지를 가져옵니다.

## 작동원리

VuePress 사이트는 사실 Vue, Vue Router, Web pack으로 만들어진 SPA이다. 

이전에 Vue를 사용한 적이 있다면 사용자 정의 테마를 작성하거나 개발할 때 친숙한 개발 경험을 가질 것이다.  (Vue DevTools를 사용하여 사용자 정의 테마를 디버그할 수도 있다!)

빌드하는 동안 앱의 서버 렌더링 버전을 만들고 각 경로를 가상으로 방문하여 해당 HTML을 렌더링하. 이 접근 방식은 **[Nuxt에서](https://nuxtjs.org/)** 영감을 밧았고, `nuxt generate`명령 및 **[Gatsby](https://www.gatsbyjs.org/)** 와 같은 기타 프로젝트와 유사하다.

각 Markdown 파일은 **[markdown-it](https://github.com/markdown-it/markdown-it)** 사용하여 HTML로 컴파일된다. 그런 다음 Vue 구성 요소의 템플릿으로 처리된다. 이를 통해 Markdown 파일 내에서 Vue를 직접 사용할 수 있으며 동적 콘텐츠를 포함해야 할 때 유용하다.

## 시작하기

- 기존 프로젝트가 있는 경우 3단계 부터 시작하면 됨.
- 내 경우, Vue-cli 연습과정중이므로 vue-cli로 프로젝트 생성한 버전에 적용함.

1. 디렉토리 생성 및 변경

```bash
mkdir vuepress-starter && cd vuepress-starter
```

1. 패키지 관리자 초기화

```bash
npm init
```

1. 로컬로 VuePress 설치;

```bash
npm install -D vuepress
```

1. docs 디렉토리와 기본 마크업 파일 생성

```bash
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

1. 실행 script 추가 
    - 이 부분은 옵셔널하지만, 강력하게 추천된다.

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

1. 문서 파일 로컬 서버로 실행

```bash
npm run docs:dev
```

## 디렉토리 구조

권장되는 구조는 다음과 같다.

```bash
├── docs
│   ├── .vuepress (Optional)
│   │   ├── components (Optional)
│   │   ├── theme (Optional)
│   │   │   └── Layout.vue
│   │   ├── public (Optional)
│   │   ├── styles (Optional)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (Optional, Danger Zone)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (Optional)
│   │   └── enhanceApp.js (Optional)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

[Getting Started | VuePress](https://vuepress.vuejs.org/guide/getting-started.html#manual-installation)