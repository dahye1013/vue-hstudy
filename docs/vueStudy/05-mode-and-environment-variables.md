## Modes

Mode 는 Vue CLI 프로젝트의 중요한 컨셉이다. 기본적으로 3가지 모드가 있다.

1. **development**

    — `vue-cli-service serve` 로 사용된다.

2. **test**

    — `vue-cli-service test:unit`로 사용된다.

3. **production**

    — `vue-cli-service build` 와 `vue-cli-service test:e2e` 로 사용된다.

`--mode` 옵션 플래그를 전달하여 명령에 사용되는 기본 모드를 덮어쓸 수 있다. 

```bash
vue-cli-service build --mode development
```

이런 경우, build 명령어를 development 명령어로 덮어쓴다.

vue-cli-service를 실행될 때, 모든 corresponding files로부터 환경 변수가 로드된다. 만약 `NODE_ENV` 변수가 포함되지 않은 경우 그에 따라 설정됩니다.  예를 들어 `NODE_ENV`는 프로덕션 모드에서는 "production"으로, 테스트 모드에서는 `"test"`로, 그렇지 않으면 `"development"`로 설정된다.

그럼 `NODE_ENV`는 앱이 기본 모드(개발, 프로덕션 또는 테스트)에서 실행 중이고 결과적으로 어떤 웹 팩 구성을 만들 것인지 결정한다.  

예를 들어 `NODE_ENV`를 "test"로 설정하면, Vue CLI는 unit test 최적화되어 있는 웹 팩 구성을 생성한다. 유닛 테스트에 불필요한 이미지 및 기타 자산은 처리하지 않는다. 

마찬가지로 `NODE_ENV= development` 웹팩 설정을 생성하여 HMR(Hot Module Replacement)을 활성화하거나 자산을 해시하거나 vendor bundles 를 생성하여 개발 서버를 실행할 때 신속하게 재확보할 수 있다. 

- **HMR**

`vue-cli-service` 빌드를 실행하는 경우 배포 환경에 관계없이 `NODE_ENV`를 항상 "production"으로 설정하여 배포할 수 있는 앱을 얻어야 합니다.

> 환경에 기본 `NODE_ENV`가 있는 경우 `vue-cli-service`명령을 실행할 때 이를 제거하거나 `NODE_ENV`를 명시적으로 설정해야 한다.

## 환경변수 (Environment Variables)

프로젝트 루트에 파일 배치를 통해 환경 변수를 지정할 수 있다.

```bash
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

env 파일에는 환경 변수의 키=값 쌍만 포함한다.

 

```bash
FOO=bar
VUE_APP_NOT_SECRET_CODE=some_value
```

`NODE_ENV`, `BASE_URL`

`'NODE_ENV', 'BASE_URL'` 혹은 `'VUE_'APP_'`로 시작하는 변수만 *클라이언트 번들*에 '웹 팩'과 함께 정적으로 내장(`webpack.DefinePlugin`)됩니다.  같은 이름을 가질 수 있는 개인 키가 기계에 실수로 노출되지 않도록 하기 위한 것이다.

이외의 다른 규칙은 이곳에서 확인 가능하다.

[GitHub - motdotla/dotenv: Loads environment variables from .env for nodejs projects.](https://github.com/motdotla/dotenv#rules)

또한  **[dotenv-expand](https://github.com/motdotla/dotenv-expand)** 를 사용한 표현식도 가능하다. (available in Vue CLI 3.5+)

```bash
FOO=foo
BAR=bar

CONCAT=$FOO$BAR # CONCAT=foobar
```

**Env Loading Priorities**

> 특정 모드에 대한 Env 파일(예: .env.production)이 일반 모드(예: .env)보다 높은 우선순위를 가진다.
또한 Vue CLI를 실행할 때 이미 존재하는 환경 변수의 우선 순위가 가장 높으며 .env 파일에서 덮어쓰지 않는다.
.env 파일은 vue-cli 서비스를 시작할 때 로드된다. 변경한 후 서비스를 다시 시작해야 한다.

### Example: Staging Mode

다음과 같은 파일이 있는 경우.

[ **.env ]** 

```bash
VUE_APP_TITLE=My App
```

[ **.env.staging** ] 

```bash
NODE_ENV=production
VUE_APP_TITLE=My Staging App
```

- `vue-cli-service build` 로 프로젝트를 빌드할때,  `.env`, `.env.production` , `.env.production.local` 가 존재하면 읽어온다.
- `vue-cli-service build --mode staging` staging mode 로 프로젝트를 빌드할때, `.env`, `.env.staging` , `.env.staging.local` 가 존재하면 읽어온다.

두 가지 케이스 모두 `NODE_ENV`, 때문에 Production app으로 빌드된다. 하지만, staging 버전은 `process.env.VUE_APP_TITLE` 가 다른 값으로 덮어씌워진다. 

### **Using Env Variables in Client-side Code**

환경 변수에 접근하고 싶을때, 이처럼 접근한다. 

```jsx
console.log(process.env.VUE_APP_NOT_SECRET_CODE)
```

In addition to `VUE_APP_*` variables, there are also two special variables that will always be available in your app code:

- `NODE_ENV` - this will be one of `"development"`, `"production"` or `"test"` depending on the **[mode](https://cli.vuejs.org/guide/mode-and-env.html#modes)** the app is running in.
- `BASE_URL` - this corresponds to the `publicPath` option in `vue.config.js` and is the base path your app is deployed at.

All resolved env variables will be available inside `public/index.html` as discussed in **[HTML - Interpolation](https://cli.vuejs.org/guide/html-and-static-assets.html#interpolation)**.

**TIP**

`vue.config.js` 에서 env var를 computed하게 사용할 수도 있다. 

하지만, `VUE_APP_` 표현식은 사용해야한다.

```jsx
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // config
}
```

### **Local Only Variables**

깃에 커밋하고 싶지 않을때,  `.env.local` 는  `.gitignore` 가 기본이다.

 깃 ignore하고 싶다면, 모드명 뒤에 `.local` 을 붙이면 된다.