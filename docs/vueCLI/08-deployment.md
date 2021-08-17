# Deployment

## General Guidelines

VUE CLI를 통해서 배포용 정적 자산을 처리해야하는데, 백엔드 프레임워크와 함께 사용하고 있다면, Vue CLI에서 올바를 파일 위치에 빌드 파일을 생성했는지 확인해야한다.

그리고 나서 백엔드 프레임워크 배포 지침에 따라야한다.

만약 프론트 앱을 백엔드와 별도로 개발하는 경우, (백엔드가 프론트에 API를 노출하고, 프론트와 완전 퓨어한 static app) dist 디렉토리에 빌드된 내용을 static file server에 배포할 수 있다. 이때는 `publicPath`를 정확하게 세팅해야 한다.

- `publicPath`란?

  - 어플리케이션 번들이 배포된 기본 URL(`baseUrl`)이다.
  - webpack의 `output.publicPath`와 동일하다.
  - VUE CLI에서는 다른 용도로 이 값을 호출하기도 한다. 그래서 **`webpack output.publicPath` 을 수정하는 대신 `publicPath`를 사용**해야한다.

  [Configuration Reference | Vue CLI](https://cli.vuejs.org/config/#publicpath)

### Previewing Locally

dist 디렉토리는 HTTP 서버에서 처리되므로, `file://` 프로토콜을 통해 `dist/index.html` 파일을 열어도 작동하지 않는다. (publicPath를 상대 값으로 구성하지 않은 경우임)

로컬에서 프로덕션 빌드된 것을 보는 가장 쉬운 방법은 Node.js 정적 파일 서버를 사용하는 것이다.

```bash
npm install -g serve
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```

### Routing with `history.pushState`

Vue Router의 history 모드를 사용할때, 단순 정적 서버는 실패 된다.

예를 들어 Vue Router에서 `/todos/42` 라우트를 사용하는 경우, dev 서버가`localhost:3000/todos/42` 로 설정되어 응답을 받을 것이다. 하지만, 단순 정적 서버는 프로덕션으로 빌드된다면 404로 응답될 것 이다.

이 문제를 해결하기 위해서는 정적 파일과 일치하지 않는 요청에 대해 프로덕션 서버를 index.html로 폴백하도록 구성해야 한다.

- Router History Mode

  - history.pushState API를 활용하여 페이지를 다시 로드하지 않고도 URL 탐색
  - 적절한 서버 설정이 없는 단일 페이지 클라이언트 앱이라 사용자가 직접 url에 접속하면 404 오류가 발생한다.

  ⇒ 서버에 포괄적인 대체 경로를 추가하여 해결한다. ([설정법 링크](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations))

  > [주의사항‼️]
  > 이렇게 설정하면 모든 경로가 index.html을 제공하기 때문에 404 에러를 보고하지 않는다. 이 문제를 해결하려면 catch-all 라우트를 통해 404 페이지를 구현하면 된다. 자세한 내용은 후에 SSR을 공부하면서 알아보자. ([SSR 링크](https://ssr.vuejs.org/#what-is-server-side-rendering-ssr))

  ```bash
  const router = new VueRouter({
    mode: 'history',
    routes: [{ path: '*', component: NotFoundComponent }]
  })
  ```

### CORS

정적 프런트엔드가 백엔드 API와 다른 도메인에 배포된 경우 CORS를 적절하게 구성해야 한다.

- CORS (Cross-Origin Resource Sharing )

  교차 출처(다른 출처) 리소스 공유

  [CORS](https://www.notion.so/CORS-3d5b3eacf9b144e2acf32dd038db0167)

### PWA

PWA 플러그인을 사용하는 경우 Service Worker가 올바르게 등록할 수 있도록 HTTPS를 통해 앱이 서비스되어야 한다.

— PWA 내용은 플러그인 쪽에 따로 정리하고 있음.

[PWA](https://www.notion.so/PWA-572fbc0d49894d19a1d82f9f3d39aa88)

## Platform Guides

배포 가능한 다양한 플랫폼

1. GitHub Pages
2. Netlify
3. Render
4. Amazon S3 - 참고 링크 [vue-cli-plugin-s3-deploy.](https://github.com/multiplegeorges/vue-cli-plugin-s3-deploy)
5. Firebase
6. Vercel

— 현재 vue-hstudy는 Netlify 플랫폼을 통해서 배포함

## References

### Heroku
