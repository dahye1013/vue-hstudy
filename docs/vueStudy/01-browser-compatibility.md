# Browser Compatibility

## Browserslist

- **브라우저나 Node.js 버전에 대응하여 내부에서 처리해야 할 작업이 다를 때, 설정에 사용한다.**

  — 명시적으로 브라우저나 버전을 특정할 수 있고, 브라우저 통계를 사용하여 설정 가능.

  (통계 정보는 API 서버 아니고, caniuse-lite라는 프로젝트 정적 데이터 이용, 빌드할때 가져옴)

  ⇒ 브라우저 환경을 정의하여 바벨이나 프레임워크 등에서 폴리필 하는데 사용함.

### 쿼리

- 쿼리 문법을 사용하여 브라우저를 정의한다.

  ```json
  ie 10 //인터넷익스플로러(IE) 버전 10을 지원
  ie 6-9  //인터넷익스플로러(IE) 버전 6~9를 지원
  not ie 6-10//인터넷익스플로러(IE) 버전 6~9를 지원안함
  not ie <= 10 ////인터넷익스플로러(IE) 버전 10 미만은 지원 안함

  > 2%  //전 세계 점유율 2% 이상의 브라우저만 지원
  > 2% in KR // 한국(해당 국가코드 나라)에서는 전 세계 점유율 2% 이상의 브라우저만 지원
  > 2% in alt-AS //아시아에서는 전 세계 점유율 2% 이상의 브라우저만 지원

  last 2 Chrome versions  //최근 2개 버전의 Chrome 브라우저를 선택
  last 2 Firefox versions //최근 2개 버전의 Firefox 브라우저를 선택
  not dead // 지원이 중단된 브라우저 지원 안함
  ```

- 조합해서 사용가능

  ```json
  > 1%
  last 2 versions
  not ie <= 10
  ```

### 쿼리를 정의하는 방법

1. `.browserslistrc` 파일안에 정의
2. `package.json` 파일에`browserslist` 키를 사용해 정의

## Polyfills

- 기본 Vue CLI 프로젝트에서는 @vue/babel-preset-app 을 사용하여, @babel/preset-env and the browserslist 설정에 따라서 프로젝트에 해당 폴리필을 수행한다.

### useBuiltIns: 'usage'

기본적으로

[GitHub - browserslist/browserslist: 🦔 Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env](https://github.com/browserslist/browserslist)

### CLI 서비스
