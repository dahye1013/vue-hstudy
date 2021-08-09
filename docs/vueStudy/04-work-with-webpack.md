# Working with WebPack

- webpack 관련해서는 사실 이해가 잘가지 않음
- 정확한 사용법과 용도를 알기 위해서는 webpack 자체를 따로 공부해야할듯.

  — 현재 이해한 버전은 vue.config.js 에서 vue에서 사용하는 웹팩 설정을 실행 할 수 있으며, 각각 플러그인마다 웹팩을 통해서 말아지기 때문에 옵션 값들을 설정할 수 있다는 것.

  ⇒ chunk bundle이라는 걸로 모듈단위로 번들링 된다는 것... 그래서 index.html에 진입할때, script에서 번들링 된것을 불러오는것?

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

만약 conditional behavior을 환경에 맞추고 싶거나, 설정에 대한 변이를 즉각적으로 발생시키고 싶다면 function을 사용하라. (lazt하게 평가되어 env 변수가 세팅된다,) function은 설정을 인자로 받아들인다. function 안에서 당신은 설정에 대한 변이를 즉각적으로 발생시킬 수 있다. 혹은 객체를 return 함으로서 merge 시켜라.

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

> CSS loader와 관련해서는 웹팩 체이닝보단느 css.loaderOptions 을 사용하는 것을 추천한다. css.loaderOptions 을사용하면 CSS파일 타입에따라서 여러가지 rule을 각각 적용시킬 수 있다.

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

이 옵션의 모든 기능을 활용하는 방법을 이해하려면 웹 팩 체인의 API를 숙지하고 일부 소스 코드를 읽어야 하지만, 이 옵션을 사용하면 값을 직접 변종하는 것보다 더 표현적이고 안전하게 웹 팩 구성을 수정할 수 있습니다.

예를 들어 index.html의 기본 위치를 /Users/username/proj/public/index.html에서 /Users/username/proj/app/templates/index.html로 변경하려고 합니다. html-webpack-plugin을 참조하여 전달할 수 있는 옵션 목록을 볼 수 있습니다. 템플릿 경로를 변경하려면 다음 구성을 사용하여 새 템플릿 경로를 전달하면 됩니다.

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

### Replacing Loaders of a Rule

만약 기존에 존재하는 Base Loader를 변경하고 싶다면, vue-svg-loader을 통해서 인라인 파일을

If you want to replace an existing Base Loader, for example using vue-svg-loader to inline SVG files instead of loading the file:

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

You will need to familiarize yourself with **[webpack-chain's API](https://github.com/mozilla-neutrino/webpack-chain#getting-started)** and **[read some source code](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config)** in order to understand how to leverage the full power of this option, but it gives you a more expressive and safer way to modify the webpack config than directly mutate values.

For example, say you want to change the default location of `index.html` from `/Users/username/proj/public/index.html` to `/Users/username/proj/app/templates/index.html`. By referencing **[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options)** you can see a list of options you can pass in. To change our template path we can pass in a new template path with the following config:

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

### 프로젝트 내 웹팩 설정 확인하기

`@vue/cli-service` 는 추상화 되어있기

Since `@vue/cli-service` abstracts away the webpack config, it may be more difficult to understand what is included in the config, especially when you are trying to make tweaks yourself.

`vue-cli-service` exposes the `inspect` command for inspecting the resolved webpack config. The global `vue` binary also provides the `inspect` command, and it simply proxies to `vue-cli-service inspect` in your project.

The command will print the resolved webpack config to stdout, which also contains hints on how to access rules and plugins via chaining.

You can redirect the output into a file for easier inspection:

```bash
vue inspect > output.js
```

By default, inspect command will show the output for development config. To see the production configuration, you need to run

```bash
vue inspect --mode production > output.prod.js
```

Note the output is not a valid webpack config file, it's a serialized format only meant for inspection.

You can also inspect a subset of the config by specifying a path:

```bash
# only inspect the first rule
vue inspect module.rules.0
```

Or, target a named rule or plugin:

```bash
vue inspect --rule vue
vue inspect --plugin html
```

Finally, you can list all named rules and plugins:

```bash
vue inspect --rules
vue inspect --plugins
```

### 참고 링크

[Working with Webpack | Vue CLI](https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config)
