# Progressive Web Application

새롭고 강력한 소프트웨어 앱을 만드는 방식

HTML, CSS, JavaScript 를 이용해서 만드는 웹앱을 모던한 웹 브라우저 API's와 결합하여 크로스 플랫폼에서 동작하는 플랫폼을 손 쉽게 만든다.

이미 만든 웹앱을 데스크탑이나 앱에서 동작하도록 한다.

- **Native Apps**
  1. 특정 플랫폼(안드로이프,아이폰)에서 동작하고, 다양한 API's를 이용하여 사용자에게 다양한 기능을 제공한다.
  2. 앱 스토어를 사용해야해서 접근성이 떨어진다.
- **Web App**
  1. 다양한 브라우저를 통해 접근 가능하여, 접근성이 높다.
  2. 네이티브앱처럼 플랫폼 자체 API를 사용할 수 없다
- **PWA**

  1.  접근성이 높은 웹앱의 장점

  1.  플랫폼 자체 API 사용 가능하다.

### PWA

1. responsive web design
2. service worker
3. app manifest
4. push nofitication
5. native app-like

— 유튜브와 유튜브 뮤직, 틱톡, 트위터, 틴더,....

### PWA Tools

- PWA Builder

  마이크로 소프트사에서 제공하는 PWA 빌더를 통해서 만들 수 있다.

[PWABuilder](https://www.pwabuilder.com/)

- WorkBox

  구글에서 만든 다양한 PWA를 위한 서비스 워커를 자동으로 만들어주는 라이브러리

[Workbox | Google Developers](https://developers.google.com/web/tools/workbox)

### 준비물

1. 웹 코드로 만든 웹사이트나 어플리케이션
2. HTTPS를 통한 서비스 제공
3. Application Manifest.json

   웹 어플리케이션 정보가 담겨있다.

4. Service Wroker

   자바스크립트로 작성된다.

   어플리케이션에서 서버와 데이터를 주고 받을 떄, 중간에서 통제하여 특정 정보를 저장해두고, 네트워크가 오프라인 상태일때 보여줌

   최신 뉴스들은 미리 fetch해놓고, 사용자가 어플리케이션을 키면 바로 보이게 성능향상
