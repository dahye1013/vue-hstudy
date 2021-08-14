(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{374:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("h2",{attrs:{id:"running-installation-with-sudo-or-as-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-installation-with-sudo-or-as-root"}},[t._v("#")]),t._v(" Running installation with sudo or as root")]),t._v(" "),a("p",[a("code",[t._v("@vue/cli-service")]),t._v("를 "),a("code",[t._v("root")]),t._v(" 사용자로 설치하거나 "),a("code",[t._v("sudo")]),t._v("와 함께 설치할 경우 패키지 설치 후 스크립트를 실행할 때 문제가 발생할 수 있다.")]),t._v(" "),a("p",[t._v("이것은 npm의 보안 기능이다. 설치 스크립트가 의도하지 않게 악의적일 수 있으므로 루트 권한으로 npm을 실행하는 것은 항상 피해야 한다.")]),t._v(" "),a("p",[t._v("그러나 필요한 경우 npm의 "),a("code",[t._v("—unsafe-perm")]),t._v(" 플래그를 설정하여 이 오류를 해결할 수 있다. 명령 앞에 환경 변수를 붙여 이 작업을 수행할 수 있다")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("npm_config_unsafe_perm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true vue create my-project\n")])])]),a("h2",{attrs:{id:"symbolic-links-in-node-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbolic-links-in-node-modules"}},[t._v("#")]),t._v(" Symbolic Links in node_modules")]),t._v(" "),a("p",[a("code",[t._v("npm link")]),t._v(" 또는 "),a("code",[t._v("yarn link")]),t._v("에 의해 설치된 종속성이 있는 경우, 이러한 심볼 링크된 종속성에 대해 ESLint(때로는 Babel도 마찬가지)가 제대로 작동하지 않을 수 있습니다. 웹 팩은 기본적으로 실제 위치에 대한 심볼 링크를 해결("),a("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolvesymlinks",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack resolves symlinks to their real locations by default"),a("OutboundLink")],1),t._v(")하므로 ESLint / Babel 구성 조회가 중단되기 때문이다.")]),t._v(" "),a("p",[t._v("해결 방법은 웹 팩에서 "),a("code",[t._v("symlinks")]),t._v(" 해결을 수동으로 비활성화하는 것 이다.")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("symlinks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("‼️경고\n"),a("code",[t._v("resolve.symlinks")]),t._v("를 사용하지 않도록 설정하면 synpm 또는 pnpm과 같은 심볼 링크를 사용한 타사 npm 클라이언트에 의해 종속성이 설치되는 경우 핫 모듈 재로딩이 중단될 수 있다.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);