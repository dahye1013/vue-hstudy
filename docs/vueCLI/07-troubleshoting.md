# Troubleshooting

## Running installation with sudo or as root

`@vue/cli-service`를 `root` 사용자로 설치하거나 `sudo`와 함께 설치할 경우 패키지 설치 후 스크립트를 실행할 때 문제가 발생할 수 있다.

이것은 npm의 보안 기능이다. 설치 스크립트가 의도하지 않게 악의적일 수 있으므로 루트 권한으로 npm을 실행하는 것은 항상 피해야 한다.

그러나 필요한 경우 npm의 `—unsafe-perm` 플래그를 설정하여 이 오류를 해결할 수 있다. 명령 앞에 환경 변수를 붙여 이 작업을 수행할 수 있다

```bash
npm_config_unsafe_perm=true vue create my-project
```

## Symbolic Links in node_modules

`npm link` 또는 `yarn link`에 의해 설치된 종속성이 있는 경우, 이러한 심볼 링크된 종속성에 대해 ESLint(때로는 Babel도 마찬가지)가 제대로 작동하지 않을 수 있습니다. 웹 팩은 기본적으로 실제 위치에 대한 심볼 링크를 해결([webpack resolves symlinks to their real locations by default](https://webpack.js.org/configuration/resolve/#resolvesymlinks))하므로 ESLint / Babel 구성 조회가 중단되기 때문이다.

해결 방법은 웹 팩에서 `symlinks` 해결을 수동으로 비활성화하는 것 이다.

```jsx
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  },
};
```

> ‼️경고
> `resolve.symlinks`를 사용하지 않도록 설정하면 synpm 또는 pnpm과 같은 심볼 링크를 사용한 타사 npm 클라이언트에 의해 종속성이 설치되는 경우 핫 모듈 재로딩이 중단될 수 있다.
