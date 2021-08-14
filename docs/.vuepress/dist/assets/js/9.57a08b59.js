(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(s,t,a){"use strict";a.r(t);var e=a(40),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[s._v("#")]),s._v(" VuePress")]),s._v(" "),a("h2",{attrs:{id:"vuepress-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-2"}},[s._v("#")]),s._v(" VuePress?")]),s._v(" "),a("p",[s._v("VuePress는 최소한의 정적 사이트 생성기 의 두 부분으로 구성됩니다.  Vue 기반 테마 시스템 및 플러그인 API , 기술 문서 작성에 최적화된 기본 테마를 사용합니다.  Vue 자체 하위 프로젝트의 문서화 요구 사항을 지원하기 위해 만들어졌습니다.")]),s._v(" "),a("p",[s._v("VuePress에서 생성된 각 페이지에는 사전 렌더링된 자체 정적 HTML이 있어 뛰어난 로딩 성능을 제공하고 SEO 친화적입니다. 그러나 페이지가 로드되면 Vue가 정적 콘텐츠를 인수하여 완전한 단일 페이지 애플리케이션(SPA)으로 전환합니다. 사용자가 사이트를 탐색할 때 요청에 따라 추가 페이지를 가져옵니다.")]),s._v(" "),a("h2",{attrs:{id:"작동원리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#작동원리"}},[s._v("#")]),s._v(" 작동원리")]),s._v(" "),a("p",[s._v("VuePress 사이트는 사실 Vue, Vue Router, Web pack으로 만들어진 SPA이다.")]),s._v(" "),a("p",[s._v("이전에 Vue를 사용한 적이 있다면 사용자 정의 테마를 작성하거나 개발할 때 친숙한 개발 경험을 가질 것이다.  (Vue DevTools를 사용하여 사용자 정의 테마를 디버그할 수도 있다!)")]),s._v(" "),a("p",[s._v("빌드하는 동안 앱의 서버 렌더링 버전을 만들고 각 경로를 가상으로 방문하여 해당 HTML을 렌더링하. 이 접근 방식은 "),a("strong",[a("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nuxt에서"),a("OutboundLink")],1)]),s._v(" 영감을 밧았고, "),a("code",[s._v("nuxt generate")]),s._v("명령 및 "),a("strong",[a("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Gatsby"),a("OutboundLink")],1)]),s._v(" 와 같은 기타 프로젝트와 유사하다.")]),s._v(" "),a("p",[s._v("각 Markdown 파일은 "),a("strong",[a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[s._v("markdown-it"),a("OutboundLink")],1)]),s._v(" 사용하여 HTML로 컴파일된다. 그런 다음 Vue 구성 요소의 템플릿으로 처리된다. 이를 통해 Markdown 파일 내에서 Vue를 직접 사용할 수 있으며 동적 콘텐츠를 포함해야 할 때 유용하다.")]),s._v(" "),a("h2",{attrs:{id:"시작하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시작하기"}},[s._v("#")]),s._v(" 시작하기")]),s._v(" "),a("ul",[a("li",[s._v("기존 프로젝트가 있는 경우 3단계 부터 시작하면 됨.")]),s._v(" "),a("li",[s._v("내 경우, Vue-cli 연습과정중이므로 vue-cli로 프로젝트 생성한 버전에 적용함.")])]),s._v(" "),a("ol",[a("li",[s._v("디렉토리 생성 및 변경")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" vuepress-starter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vuepress-starter\n")])])]),a("ol",[a("li",[s._v("패키지 관리자 초기화")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])])]),a("ol",[a("li",[s._v("로컬로 VuePress 설치;")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D vuepress\n")])])]),a("ol",[a("li",[s._v("docs 디렉토리와 기본 마크업 파일 생성")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])])]),a("ol",[a("li",[s._v("실행 script 추가\n"),a("ul",[a("li",[s._v("이 부분은 옵셔널하지만, 강력하게 추천된다.")])])])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ol",[a("li",[s._v("문서 파일 로컬 서버로 실행")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:dev\n")])])]),a("h2",{attrs:{id:"디렉토리-구조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#디렉토리-구조"}},[s._v("#")]),s._v(" 디렉토리 구조")]),s._v(" "),a("p",[s._v("권장되는 구조는 다음과 같다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("├── docs\n│   ├── .vuepress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │   ├── components "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │   ├── theme "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │   │   └── Layout.vue\n│   │   ├── public "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │   ├── styles "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional, Danger Zone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │   └── enhanceApp.js "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#manual-installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("Getting Started | VuePress"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);