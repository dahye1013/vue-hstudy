# CORS( Cross-Origin Resource Sharing )

교차 출처(다른 출처) 리소스 공유

- 교차 출처 → 다른 출처
- 추가 HTTP 헤더를 사용하여, 한 출처에서 실행중인 웹 어플이케이션이 다른 출처 자원에 접근할 수 있는 권한은 부여하도록 브라우저에서 알려주는 체제이다.
- 자신의 출처(Origin)와 다를때 교차 출처 HTTP 요청은 실행한다

[https://domain-a.com](https://domain-a.com/) 에서 프론트 엔드 JS 코드가 **XMLHttpRequest**(XHR - 서버와 상호작용하기 위한 객체)를 사용해서 [https://domain-b.com/data.json](https://domain-b.com/data.json)를 요청하는 경우, 보안상의 이유로 브라우저는 교차출처 HTTP 요청을 제한한다.

⇒ 자신과 동일한 출처 리소스만 불러올 수 있으며, 다른 출처 리소스를 불어오기 위해서는 CORS 헤더를 포함한 응답을 반환해야 한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/efdb847e-4098-4b59-87f4-e1079af3b763/Untitled.png)

## 출처 (Origin)은 무엇인가?

서버의 위치를 의미하는 `https://google.com`과 같은 URL들은 마치 하나의 문자열 같아 보여도, 사실은 여러 개의 구성 요소로 이루어져있다.

![https://evan-moon.github.io/static/e25190005d12938c253cc72ca06777b1/6af66/uri-structure.png](https://evan-moon.github.io/static/e25190005d12938c253cc72ca06777b1/6af66/uri-structure.png)

이때 출처는 `Protocol`과 `Host`, 그리고 위 그림에는 나와있지 않지만 `:80`, `:443`과 같은 포트 번호까지 모두 합친 것을 의미한다. 즉, 서버의 위치를 찾아가기 위해 필요한 가장 기본적인 것들을 합쳐놓은 것이다.

또한 출처 내의 포트 번호는 생략이 가능한데, 이는 각 웹에서 사용하는 `HTTP`, `HTTPS` 프로토콜의 기본 포트 번호가 정해져있기 때문이다. HTTP가 정의된 [RFC 2616](https://tools.ietf.org/html/rfc2616#section-3.2.2) 문서를 보면 다음과 같이 기본 포트 번호가 함께 정의되어있는 것을 볼 수 있다.

그러나 만약 `https://google.com:443`과 같이 출처에 포트 번호가 명시적으로 포함되어 있다면 이 포트 번호까지 모두 일치해야 같은 출처라고 인정된다.

우리는 브라우저의 개발자 도구의 콘솔에서 `Location` 객체가 가지고 있는 `origin` 프로퍼티에 접근함으로써 손 쉽게 어플리케이션이 실행되고 있는 출처를 알아낼 수도 있다.

```jsx
console.log(location.origin);
```

## CORS와 안전한 요청

크로스 오리진 요청을 보낼때 브라우저는 항상 `Origin` 이라는 헤더를 요청에 추가한다.

https://javascript.info/page 에서 https://anywhere.com/request에 요청을 보낼때의 헤더는 다음과 같다.

```bash
GET /request
Host: anywhere.com
Origin: https://javascript.info
...
```

`Origin` 헤더엔 요청이 이뤄지는 페이지 경로(/page)가 아닌 오리진(도메인·프로토콜·포트) 정보 담겨 있다.

서버는 요청 헤더에 있는 `Origin`를 검사하고, 요청을 받아들이기로 동의한 상태라면 특별한 헤더 `Access-Control-Allow-Origin`를 응답에 추가한다. 이 헤더엔 허가된 오리진(위 예시에선 `https://javascript.info`)에 대한 정보나 `*`이 명시된다.

이때 응답 헤더 `Access-Control-Allow-Origin`에 오리진 정보나 `*`이 들어있으면 응답은 성공하고, 아니면 실패한다.

이 과정에서 **브라우저**는 중재인의 역할을 수행한다.

1. 브라우저는 크로스 오리진 요청 시 `Origin`에 값이 제대로 설정, 전송되었는지 확인
2. 브라우저는 서버로부터 받은 응답에 `Access-Control-Allow-Origin`이 있는지를 확인해서 서버가 크로스 오리진 허용여부 확인
3. 응답 헤더에 `Access-Control-Allow-Origin`이 있다면 자바스크립트를 사용해 응답에 접근, 아니면 에러

## 응답헤더

크로스 오리진 요청이 발생하면, 안전한 응담 헤더로 분류되는 헤더에만 접근 할 수 있다.

**[안전한 응답헤더]**

- `Cache-Control`
- `Content-Language`
- `Content-Type`
- `Expires`
- `Last-Modified`
- `Pragma`

→ 이 외의 응답 헤더에 접근하면 에러

## CORS 를 사용하는 요청들

1. XMLHttpRequest, FetchAPI 호출
2. 웹폰트
3. WebGL 텍스쳐
4. drawImage()
5. CSS Shapes — 이미지로부터 추출하는 경우

## SOP(Same-Origin Policy)

웹 생태계에는 다른 출처로의 리소스 요청을 제한하는 것과 관련된 두 가지 정책이 존재한다.

1. CORS
2. SOP(Same-Origin Policy)

SOP는 지난 2011년, [RFC 6454](https://tools.ietf.org/html/rfc6454#page-5)에서 처음 등장한 보안 정책으로 말 그대로 “같은 출처에서만 리소스를 공유할 수 있다”라는 규칙을 가진 정책이다.

그러나 웹이라는 오픈스페이스 환경에서 다른 출처에 있는 리소스를 가져와서 사용하는 일은 굉장히 흔한 일이라 무작정 막을 수도 없는 노릇이니 몇 가지 예외 조항을 두고 이 조항에 해당하는 리소스 요청은 출처가 다르더라도 허용하기로 했는데, 그 중 하나가 “CORS 정책을 지킨 리소스 요청”이다.

(참고로 CORS라는 이름이 처음 등장한 것은 2009년이라, SOP의 등장보다 빠르다)

## 같은 출처와 다른 출처의 구분

두 개의 출처가 서로 같다고 판단하는 로직은 간단하다.

두 URL의 구성 요소에서 `Scheme`, `Host`, `Port` 가 동일하면 된다.

`https://dahye1013.github.io:80`라는 출처를 예로 들면 `https://` 이라는 스킴에 `1013.github.io` 호스트를 가지고 `:80`번 포트를 사용하고 있다는 것만 같다면 나머지는 전부 다르더라도 같은 출처로 인정된다.

## CORS는 어떻게 동작하나요?

웹 클라이언트 어플리케이션이 다른 출처의 리소스를 요청할 때는 HTTP 프로토콜을 사용하여 요청을 보내게 되는데, 이때 브라우저는 요청 헤더에 Origin이라는 필드에 요청을 보내는 출처를 함께 담아보낸다.

```jsx
Origin: https://evan-moon.github.io
```

이후 서버가 이 요청에 대한 응답을 할 때 응답 헤더의 Access-Control-Allow-Origin이라는 값에 “이 리소스를 접근하는 것이 허용된 출처”를 내려주고, 이후 응답을 받은 브라우저는 자신이 보냈던 요청의 Origin과 서버가 보내준 응답의 Access-Control-Allow-Origin을 비교해본 후 이 응답이 유효한 응답인지 아닌지를 결정한다.
