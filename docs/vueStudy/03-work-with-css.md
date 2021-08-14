# Working with CSS

## 참조 자산 (Referencing Assets)

컴파일 된 모든 CSS는 css-loader에 의해 `url()` 로 파싱되어 모듈 요청으로 구문을 분석하고 해결한다. 이것은 상대 경로를 사용하여 자산을 참조 할 수 있다는 것을 의미한다.

만약 참조 파일이 npm 종속성 내부 혹은 웹팩을 통해 참조하는 경우, 모호성을 피하기 위해 경로에 `~` 접두사를 붙여야 한다.

[HTML and Static Assets | Vue CLI](https://cli.vuejs.org/guide/html-and-static-assets.html#relative-path-imports)

## 전처리기(Pre-Processors)

프로젝트 생성시에 전처리기 (Sass/Less/Stylus) 를 선택할 수 있다.

프로젝트 생성 후에는 하단의 명령어를 통해서 수동으로 설치 할 수 있다.

```bash
# Sass
npm install -D sass-loader sass

# Less
npm install -D less-loader less

# Stylus
npm install -D stylus-loader stylus
```

> **웹팩 4에 대한 참고 사항** — webpack4 사용하는 경우(vue cli4의 기본) 를 사용할 때 로더가 버전 4와 호환되는지 확인해야한다. 그렇지 않으면 다른 종속성들과 conflicting 오류가 발생한다.

### 자동 가져오기(Automatic imports)

파일(색상, 변수, 믹스인)을 자동으로 가져오려면 , style-resources-loader. 를 사용하면 된다.

하단에는 `./src/styles/imports.styl` 에서 스타일러스 파일을 가져오는 방법의 예시다.

```jsx
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    //각 타입을 등록해놓고, for문 돌려서 뽑아서 addStyleResource function 실행
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('stylus').oneOf(type)),
    );
  },
};

//style-loader 실행하는 function
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/imports.styl')],
    });
}
```

### CSS Modules

JavaScript에서 import를 하기 위해서 CSS나 다른 전처리기 대상이 되는 파일들의 이름은 `.module.(css|less|sass|scss|styl)` 로 끝나야 한다.

```jsx
import styles from './foo.module.css';
// works for all supported pre-processors as well
import sassStyles from './foo.module.scss';
```

.module을 파일 이름으로 삭제하려면 css.requireModule을 설정하면 된다.

vue.config.js에서 false로 확장됨

```jsx
// vue.config.js
module.exports = {
  css: {
    requireModuleExtension: false,
  },
};
```

생성된 CSS 모듈 클래스 이름을 사용자 지정하려면 vue.config.js의 css.loaderOptions.css를 통해 사용자 지정할 수 있다. 모든 css-loader 옵션이 여기서 지원된다.

```jsx
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      css: {
        // Note: the following config format is different between Vue CLI v4 and v3
        // For Vue CLI v3 users, please refer to css-loader v1 documentations
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          localIdentName: '[name]-[hash]',
        },
        localsConvention: 'camelCaseOnly',
      },
    },
  },
};
```

### Passing Options to Pre-Processor Loaders

옵션을 전처리기 webpack loader에 전달 할 수 있다. vue.config.js의 css.loaderOptions 옵션을 사용하여 이 작업을 수행할 수 있다.

아래는 전역 변수를 모든 Sass/Less 스타일에 전달하는 예제이다.

```jsx
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "prependData" in sass-loader v8
      sass: {
        additionalData: `@import "~@/variables.sass"`,
      },
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `prependData` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        additionalData: `@import "~@/variables.scss";`,
      },
      // pass Less.js Options to less-loader
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          primary: '#fff',
        },
      },
    },
  },
};
```
