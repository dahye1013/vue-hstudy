(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{367:function(t,a,s){"use strict";s.r(a);var n=s(40),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"html-및-정적자산"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-및-정적자산"}},[t._v("#")]),t._v(" HTML 및 정적자산")]),t._v(" "),s("h2",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),s("h3",{attrs:{id:"인덱스-파일-the-index-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#인덱스-파일-the-index-file"}},[t._v("#")]),t._v(" 인덱스 파일(The Index File)")]),t._v(" "),s("p",[t._v("파일 "),s("code",[t._v("public/index.html")]),t._v("은 "),s("strong",[s("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin"),s("OutboundLink")],1)]),t._v(" 으로 처리될 템플릿이다 . 빌드하는 동안 자산 링크가 자동으로 삽입된다. 또한 Vue CLI는 리소스 힌트( "),s("code",[t._v("preload/prefetch")]),t._v("), 매니페스트/아이콘 링크(PWA 플러그인 사용 시), 빌드 중에 생성된 JavaScript 및 CSS 파일에 대한 자산 링크 도 자동으로 삽입한다.")]),t._v(" "),s("h3",{attrs:{id:"보간-interpolation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#보간-interpolation"}},[t._v("#")]),t._v(" 보간(Interpolation)")]),t._v(" "),s("p",[t._v("인덱스 파일이 템플릿으로 사용되기 때문에 lodash 템플릿 구문을 사용하여 값을 보간 할 수 있다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<%= VALUE %>")]),t._v("이스케이프 처리되지 않은 보간")]),t._v(" "),s("li",[s("code",[t._v("<%- VALUE %>")]),t._v("HTML 이스케이프 보간")]),t._v(" "),s("li",[s("code",[t._v("<% expression %>")]),t._v("JavaScript 제어 흐름용.")])]),t._v(" "),s("p",[t._v("기본값으로 노출 되고 있는 "),s("code",[t._v("html-webpack-plugin")]),t._v(" 외에도 client-side env 를 통해서 연결 할 수 있다.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code",target:"_blank",rel:"noopener noreferrer"}},[t._v("Modes and Environment Variables | Vue CLI"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("같이보면 좋은 정보 — publicPath")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cli.vuejs.org/config/#publicpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Reference | Vue CLI"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"preload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preload"}},[t._v("#")]),t._v(" Preload")]),t._v(" "),s("p",[s("strong",[s("code",[t._v('[<link rel="preload">](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)')])])]),t._v(" "),s("ul",[s("li",[t._v("preload 는 선언적인 fetch이다. Document의 onload 이벤트를 막지 않으면서 브라우저가 자원을 요청하도록 강제 할 수 있다.")]),t._v(" "),s("li",[t._v("preload는 브라우저에게 페이지에 필요한 자원을 일찍 fetch 하라는 지침이다. 현재 페이지에서 사용될 것이 확실한 리소스 들을 "),s("code",[t._v("preload")]),t._v(" 하는 것이다. 브라우저에 현재 페이지에서 필요한 리소스를 빨리 가져오게 한다.")])]),t._v(" "),s("p",[s("strong",[t._v("[Vue version]")])]),t._v(" "),s("p",[t._v("Vue 에서 "),s("strong",[s("code",[t._v('[<link rel="preload">](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)')])]),t._v(" 페이지가 로드된 직후에 필요한 리소스를 지정하는데 사용되는 리소스 힌트 유형이다. 브라우저의 기본 렌더링 기계가 작동하기 전에 페이지 로드 수명 주기 초기에 미리 로드를 시작시킨다.")]),t._v(" "),s("p",[t._v("기본적으로 Vue CLI 앱은 앱의 초기 렌더링에 필요한 모든 파일에 대한 사전 로드 힌트를 자동으로 생성한다. 힌트는 @vue/preload-webpack-plugin을 사용하여 주입 되며 chainWebpackas 를 통해 수정/삭제할 수 있다.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/vuejs/preload-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub - vuejs/preload-webpack-plugin: A Webpack plugin for wiring up "),s("code"),t._v(" (and prefetch) - supports async chunks"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"prefetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefetch"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Prefetch")])]),t._v(" "),s("p",[s("strong",[s("code",[t._v('[<link rel="prefetch">](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ)')])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("미래에 사용될 것이라고 예상되는 리소스들을 prefetch 해야 한다. 브라우저는 미래에 사용 될 리소스들을 가져와 캐시에 저장한다.")]),t._v(" "),s("p",[t._v("⇒ 사용자가 다음에 할 행동을 미리 준비하는데 적합한 기능이다.")])]),t._v(" "),s("li",[s("p",[t._v("prefetch는 자원이 필요할 수 있다는 것을 브라우저에게 힌트를 주지만, 로딩할지 말지는 브라우저가 결정한다.")])])]),t._v(" "),s("p",[s("strong",[t._v("[Vue version]")])]),t._v(" "),s("p",[t._v("페이지 로딩이 완료 된 후에, 사용자가 방문하게 될 곳에 대해 미리 알아두는 resource hint의 일종이다. 기본적으로 Vue CLI를 사용하면, async check로 생성된 모든 자바스크립트 파일을 (동적 import()를 통해서 code splitting된 결과물) 사용하여 prefetch를 생성한다.")]),t._v(" "),s("p",[t._v("이러한 힌트들은 "),s("strong",[s("a",{attrs:{href:"https://github.com/vuejs/preload-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/preload-webpack-plugin"),s("OutboundLink")],1)]),t._v(" 를 사용하여 주입 할 수 있고, "),s("code",[t._v("chainWebpack")]),t._v(" 의 "),s("code",[t._v("config.plugin('prefetch')")]),t._v(" 로 수정, 삭제할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remove the prefetch plugin")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// modify its options:")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("myasyncRoute(.)+?\\.js$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("prefetch 플러그인이 비활성화된 경우, 웹팩 내부에서 수동적으로 필요한 부분을 등록 할 수 있다.")]),t._v(" "),s("p",[t._v("— vue create 로 프로젝트를 처음 생성할 때, about 컴포넌트는 lazy-load 방식으로 가져오게 되어있는데, 해당 컴포넌트는 사용자의 요청이 있을 때 불러온다.")]),t._v(" "),s("p",[t._v("→ Lazy Load는 Vue CLI3부터 적용된 prefetch 기능을 기반으로 한다. 비동기 호출을 적용한 컴포넌트를 미리 캐시에 저장하는 기능이다.")]),t._v(" "),s("p",[t._v("원래 모든 컴포넌트는 chunk 파일에 담아서 한번에 렌더링 되는데, Lazy-load-prefetch가 적용된 컴포넌트는 따로 분리되어 캐시에 저장된다. chunk에서 분리되었기 때문에 웹 페이지 전체 렌더링 소요 시간을 적어지나, About 컴포넌트에 따로 파일 요청(request)를 보내야해서 로딩이 길어질 수 있다.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "about" */')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../views/About.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("ul",[s("li",[t._v("about 페이지 진입시, network 확인해보면 size에서 prefetch 뜨는 것을 확인 할 수 있음")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b893b38-3f7b-4ecd-bd6c-0ec3c85ffcee/Untitled.png",alt:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b893b38-3f7b-4ecd-bd6c-0ec3c85ffcee/Untitled.png"}})]),t._v(" "),s("p",[t._v("⇒ router 이동시, 이동하는 페이지 소스가 작으면 prefetch 적용해도 문제가 없지만 크기가 크면 첫 페이지 로딩이 느려지는 문제가 발생할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPrefetch: true */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./someAsyncComponent.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("prefetch 링크는 대역폭을 크게 소모한다. 만약 사용해야 할 async chunk가 많거나 모바일 유저라서 대역폭 인식(bandwidth-aware)이 크다면, prefetch링크를 끄고 수동으로 등록해야 할 수 도 있다.")])]),t._v(" "),s("h3",{attrs:{id:"disable-index-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-index-generation"}},[t._v("#")]),t._v(" Disable Index Generation")]),t._v(" "),s("p",[t._v("Vue CLI를 사용할 때, 백엔드가 존재한다면 굳이 index.html이 필요 없이 server-rendered page를 통해서 assets을 생성 할 수도 있다. 이런 경우 vue.config.js 를 통해 index.html을 생성하지 않도록 할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disable hashes in filenames")]),t._v("\n  filenameHashing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// delete HTML related webpack plugins")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("하지만 이 실제로 이 방법을 추천하지 않는다.")]),t._v(" "),s("ol",[s("li",[t._v("하드 코딩 된 파일 이름 사용시, 캐시 제어가 어렵다.")]),t._v(" "),s("li",[t._v("하드 코딩 된 파일 이름은 코드 분할이나 JS 다양한 이름으로 추가 생성시 잘 작동되지 않는다.")]),t._v(" "),s("li",[t._v("하드 코딩된 파일은 모던 모드에서 사용 할 수 없다")])]),t._v(" "),s("p",[t._v("이 방법 대신에 "),s("a",{attrs:{href:"https://cli.vuejs.org/config/#indexpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("indexPath"),s("OutboundLink")],1),t._v(" 옵션(ouput 하는 index.html를 명시하여 사용)을 사용하여 서버 사이드 프레임워크용 HTML 생성을 고려하는 것이 낫다.")]),t._v(" "),s("h3",{attrs:{id:"building-a-multi-page-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-a-multi-page-app"}},[t._v("#")]),t._v(" Building a Multi-Page App")]),t._v(" "),s("p",[t._v("모든 app이 SPA일 필요는 없다. Vue CLI는 vue.config.js에서 페이지 옵션을 사용하여 다중 페이지 앱을 만들 수 있게 할 수 있다. 빌드된 앱은 최적의 로드 성능을 위해 여러 개의 entry들을 사용하여 chunks를 공유한다.")]),t._v(" "),s("h2",{attrs:{id:"static-assets-handling-정적-자산-핸들링"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static-assets-handling-정적-자산-핸들링"}},[t._v("#")]),t._v(" Static Assets Handling(정적 자산 핸들링)")]),t._v(" "),s("p",[t._v("정적 자산은 두 가지 방법으로 핸들링 할 수 있다.")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("JavaScript에서 import 하거나, 상대 경로를 통해 템플릿/CSS 에서 참조된다.")])]),t._v(" "),s("p",[t._v("— 이러한 참조는 webpack에서 처리된다.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("public 디렉토리에 배치되고 절대 경로를 통해 참조된다.")])]),t._v(" "),s("p",[t._v("— webpack 을 거치지 않고, 복사된다.")])])]),t._v(" "),s("h3",{attrs:{id:"상대경로-가져오기-relative-path-imports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상대경로-가져오기-relative-path-imports"}},[t._v("#")]),t._v(" 상대경로 가져오기(Relative Path Imports)")]),t._v(" "),s("p",[t._v(".JavaScript, CSS 또는 *.vue파일 내에서 정적 자산을 참조할 때, 자산은 웹팩의 종속성 그래프에 포함되는 자산을 가진다. 이 컴파일 과정 등 모든 애셋 URL "),s("code",[t._v('<img src="...">')]),t._v(" "),s("code",[t._v("background: url(...)")]),t._v("및 CSS가 "),s("code",[t._v("@import")]),t._v("되는 모듈 의존성으로 해결한다.")]),t._v(" "),s("p",[t._v("예로 다음의 코드는")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./image.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")])])])]),s("p",[t._v("이처럼 컴파일 된다.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("내부적으로는 "),s("code",[t._v("file-loader")]),t._v("버전 해시를 사용하여 최종 파일 위치를 결정하고 공개 기본 경로를 수정하고 "),s("code",[t._v("url-loader")]),t._v("4kb보다 작은 자산을 조건부로 인라인하여 HTTP 요청을 줄이는데 사용된다.")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://cli.vuejs.org/config/#chainwebpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("chainWebpack을"),s("OutboundLink")],1)]),t._v(" 통해 인라인 파일 크기 제한을 조정할 수 있다 . 예를 들어 제한을 10kb로 대신 설정하려면 다음을 수행한다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("// vue.config.js\nmodule.exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack: config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config.module\n      .rule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        .use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          .loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          .tap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Object.assign"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options, "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" limit: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"url-규칙-url-transform-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-규칙-url-transform-rules"}},[t._v("#")]),t._v(" URL 규칙 (URL Transform Rules)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("URL이 절대 경로(예: "),s("code",[t._v("/images/foo.png")]),t._v(") 유지")])]),t._v(" "),s("li",[s("p",[t._v("URL이  "),s("code",[t._v(".")]),t._v("로 시작하면, 상대 모듈 요청으로 해석되고, 파일 시스템의 폴더 구조를 기반으로 확인한다.")])]),t._v(" "),s("li",[s("p",[t._v("URL이 "),s("code",[t._v("~")]),t._v(" 로 시작하면, 뒤의 모든 항목은 모듈 요청으로 해석된다.  노드 모듈 내에서 자산을 참조할 수도 있다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("~some-npm-package/foo.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("`\n")])])])]),t._v(" "),s("li",[s("p",[t._v("URL이 로 시작 "),s("code",[t._v("@")]),t._v("하면 모듈 요청으로도 해석됩니다. Vue CLI는 기본적 "),s("code",[t._v("@")]),t._v("으로 "),s("code",[t._v("<projectRoot>/src")]),t._v(" 처럼 루트에 있는 것을 참조하기에 좋다.")])])]),t._v(" "),s("h3",{attrs:{id:"the-public-folder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-public-folder"}},[t._v("#")]),t._v(" The public Folder")]),t._v(" "),s("p",[t._v("public 폴더에 있는 모든 정적 자산은 웹팩은 거치지 않고, 단순히 복사된다. 절대 경로를 사용하여 참조해야 한다.")]),t._v(" "),s("p",[t._v("모듈로서 자산을 importing에서 사용하는 것을 추천한다 (we recommend importing assets as part of your module dependency graph). 그렇게 되면 웹팩을 통하면서 몇가지 이점을 가지게 된다.")]),t._v(" "),s("ul",[s("li",[t._v("추가 네트워크 요청을 피하기 위해 스크립트와 스타일시트가 축소되고, 함께 번들 된다.")]),t._v(" "),s("li",[t._v("파일이 없으면 사용자에게 404 오류 대신 컴파일 오류를 발생시킨다.")]),t._v(" "),s("li",[t._v("결과 파일 이름에는 콘텐츠 해시가 포함되므로 브라우저가 이전 버전을 캐싱하는 것에 대해 걱정할 필요가 없다.")])]),t._v(" "),s("p",[t._v("public 디렉토리는 절대 경로를 통해 어디에 배치될 것인지를 확인한다. 도메인 이름의 루트에 배치되어 있지 않다면, URL에 publicPath 접두사를 설정해야 한다.")]),t._v(" "),s("p",[t._v("[public path 설정법 관련 링크]")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cli.vuejs.org/config/#publicpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Reference | Vue CLI"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("publicPath설정법")])]),t._v(" "),s("p",[s("code",[t._v("public/index.html")]),t._v("이나 "),s("code",[t._v("html- webpack-plugin")]),t._v("을 통해 템플릿으로 사용되는 HTML 파일에서 "),s("code",[t._v("<% = BASE_URL% >")]),t._v(" 을 통해서 링크 접두사를 설정해야 한다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= BASE_URL %>favicon.ico"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("탬플릿에서는 URL 주소를 이처럼 표시할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("`${publicPath}my-image.png`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")])])])]),s("p",[t._v("— vue inspect 커맨드를 돌려보면 DefinePlugin을 통해서 BASE_URL이 '/' 기본값으로 설정되어 있는 것을 확인 할 수 있음!!....")]),t._v(" "),s("h3",{attrs:{id:"public-folder-사용시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public-folder-사용시"}},[t._v("#")]),t._v(" public folder 사용시")]),t._v(" "),s("ul",[s("li",[t._v("빌드 출력에 특정 이름의 파일이 필요하다.")]),t._v(" "),s("li",[t._v("수천 개의 이미지를 가지고 있으며 해당 경로를 동적으로 참조해야 한다.")]),t._v(" "),s("li",[t._v("일부 라이브러리는 웹 팩과 호환되지 않을 수 있으며 다른 옵션은 없으며 "),s("code",[t._v("<script>")]),t._v(" 태그로 포함할 수 있다..")])])])}),[],!1,null,null,null);a.default=e.exports}}]);