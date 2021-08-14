# Working with WebPack

- webpack 관련해서는 사실 이해가 잘가지 않음
- 정확한 사용법과 용도를 알기 위해서는 webpack 자체를 따로 공부해야할듯.

  **[현재 이해한 버전]**

  1.  vue.config.js 에서 vue에서 사용하는 웹팩 설정을 실행 할 수 있다.
  2.  각각 플러그인마다 웹팩을 통해서 말아지기 때문에 옵션 값들을 설정할 수 있다.
  3.  loader에 각각 rule을 적용할 수 있다. (css는 별도 loader 설정을 사용하는 것이 좋다,)
  4.  vue inspect 명령어를 통해 웹팩 설정을 확인 할 수 있다.

## Vue CLI 생성 프로젝트 웹팩

Vue CLI >= 3 버전에서는 웹팩 설정 파일(webpack.config.js)이 프로젝트 루트 레벨에 노출되어 있었다. Vue CLI 3 이상에서는 웹팩 설정 파일을 `vue-cli-service`라는 이름으로 감추어 두었다.

```bash
src
node_modules
  @vue
    cli-service
...
```

### 웹팩 옵션 생성 명령어

```bash
vue inspect > options.js
```

해당 명령어를 통해서 options.js에 웹팩 옵션을 담아 확인 할 수 있다.

## 간단한 설정(Simple Configuration)

webPack 설정의 가장 쉬운 방법은 `vue.config.js` 파일에서 웹팩 관련 설정을 세팅하는 것이다.

```java
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
```

이 설정 object는 webpack-merge를 통해 merge 된다.

[GitHub - survivejs/webpack-merge: Merge designed for webpack](https://github.com/survivejs/webpack-merge)

> 어떤 webpack 옵션의 경우 vue.config.js 에 의해서 설정 될 수 있지만, 바로 변이되지 않는다. 예를 들어 output.path가 수정되는 경우, vue.config.js 에 있는 outputDir 옵션을 사용하여야 한다 (ouput.publicPath 를 수정하는 대신). 이유는 vue.config.js 는 다양한 장소에서 사용되며 모든 작업이 함께 적절히 이루어져야 하기 때문이다.

만약 conditional behavior을 환경에 맞추고 싶거나, 설정에 대한 변이를 즉각적으로 발생시키고 싶다면 function을 사용해야 한다. (lazy하게 평가되어 env 변수가 세팅된다,) function은 설정을 인자로 받아들인다. function 안에서 당신은 설정에 대한 변이를 즉각적으로 발생시킬 수 있다. 혹은 객체를 return 함으로서 merge 시켜야 한다.

```jsx
// vue.config.js
module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  },
};
```

## 체이닝(Chaining)

웹팩 내부 설정은 webpack-chain 을 통해서 유지되고 있다. 해당 라이브러리를 추상화된 날것의 웹팩 설정을 제공한다. 여기에는 loader rules과 named plugins 라고 정의된 기능이 포함되어있다. 후에 'tap'을 통해서 이러한 옵션들을 수정 할 수 있다.

체이닝을은 내부 설정을 섬세하게 조정할 수 있도록 한다. 하단에 vue.config.js 에서 chainWebpack 옵션을 통해서 어떤 방식으로 공통 분모가 수정되는지 확인 할 수 있다.

> TIP : vue inspect 를 통해서 wepcak config가 어떤게 변화되는지 확인 할 수 있다.

### Modifying Options of a Loader

```jsx
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        // modify the options...
        return options;
      });
  },
};
```

> CSS loader와 관련해서는 웹팩 체이닝보다는 css.loaderOptions 을 사용하는 것을 추천한다. css.loaderOptions 을사용하면 CSS파일 타입에따라서 여러가지 rule을 각각 적용시킬 수 있다.

### Adding a New Loader

```jsx
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
      // Add another loader
      .use('other-loader')
      .loader('other-loader')
      .end();
  },
};
```

### Adding a New Loader

```jsx
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
      // Add another loader
      .use('other-loader')
      .loader('other-loader')
      .end();
  },
};
```

—‼️ 이건 공식 문서에 쓰여있는 loader인데 다양한 여러개의 loader를 사용하는 방법을 서술한 것 같음. 다른 설명은 없고, 웹팩을 공부하면서 다시 확인해야 함.

### Replacing Loaders of a Rule

만약 기존에 존재하는 [Base Loader](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/config/base.js)를 변경하고 싶다면, 아래 방법을 통해서 인라인 svg 파일 로딩하는 방식을 `vue-svg-loader`을 통해서 하도록 변경 할 수 있다.

```jsx
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();

    // add replacement loader(s)
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
};
```

### Modifying Options of a Plugin

```jsx
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      return [
        /* new args to pass to html-webpack-plugin's constructor */
      ];
    });
  },
};
```

이 옵션의 모든 기능을 활용하는 방법을 이해하려면 [웹 팩 체인](https://github.com/neutrinojs/webpack-chain#getting-started)과 [소스코드 읽기](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config)(vue-cli)를 숙지해야한다. 하지만, 옵션을 사용하면 값을 직접 변경하는 것보다 더 표현적이고 안전하게 웹 팩을 구성 할 수 있다.

예를 들어 index.html의 기본 위치를 /Users/username/proj/public/index.html에서 /Users/username/proj/app/templates/index.html로 변경 할 때, [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options)을 참조하여 전달할 수 있는 옵션 목록을 볼 수 있다.

템플릿 경로를 변경하려면 다음 구성을 사용하여 새 템플릿 경로를 전달하면 된다.

```jsx
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].template = '/Users/username/proj/app/templates/index.html';
      return args;
    });
  },
};
```

변경후에는 `vue inspect` 명령어를 통해서 웹팩 설정을 확인하면 된다.

### 프로젝트 내 웹팩 설정 확인하기

`@vue/cli-service` 는 추상화 되어있기 때문에, 설정을 이해하기 더 어렵다.

`vue-cli-service` 는 `inspect` 명령어를 통해서 웹팩 설정을 공유 할 수 있다. 글로벌 `vue` 에서도 이 명령어를 사용 할 수 있다. 프로젝트 내에 있는 `vue-cli-service inspect` 프록시하여 작동된다.

아래는 inspect 할 수 있는 간단한 명령어이다.

```bash
vue inspect > output.js
```

기본적인 inspect 명령어는 개발 설정을 나타낸다. production 설정을 보고 싶다면 아래와 같이 옵션을 주면 된다.

```bash
vue inspect --mode production > output.prod.js
```

output에 있는 것을 유효한 웹팩 설정파일이 아니고, 단순하게 inspection 되어 직렬화 된 정보라는 것을 유의해야 한다.

특정 부분만을 inspect하고 싶으면 다음과 같이 기입한다.

```bash
# only inspect the first rule
vue inspect module.rules.0
```

```bash
vue inspect --rule vue
vue inspect --plugin html
```

rules 혹은 플러그인들을 리스팅 하는 명령어이다.

```bash
vue inspect --rules
vue inspect --plugins
```

### 참고 링크

[Working with Webpack | Vue CLI](https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config)
