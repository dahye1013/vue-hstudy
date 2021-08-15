# CORS( Cross-Origin Resource Sharing )

교차 출처(다른 출처) 리소스 공유

- 교차 출처 → 다른 출처

## 출처 (Origin)은 무엇인가?

서버의 위치를 의미하는 `https://google.com`과 같은 URL들은 마치 하나의 문자열 같아 보여도, 사실은 여러 개의 구성 요소로 이루어져있다.

![https://evan-moon.github.io/static/e25190005d12938c253cc72ca06777b1/6af66/uri-structure.png](https://evan-moon.github.io/static/e25190005d12938c253cc72ca06777b1/6af66/uri-structure.png)

이때 출처는 `Protocol`과 `Host`, 그리고 위 그림에는 나와있지 않지만 `:80`, `:443`과 같은 포트 번호까지 모두 합친 것을 의미한다. 즉, 서버의 위치를 찾아가기 위해 필요한 가장 기본적인 것들을 합쳐놓은 것이다.

또한 출처 내의 포트 번호는 생략이 가능한데, 이는 각 웹에서 사용하는 `HTTP`, `HTTPS` 프로토콜의 기본 포트 번호가 정해져있기 때문이다. HTTP가 정의된 [RFC 2616](https://tools.ietf.org/html/rfc2616#section-3.2.2) 문서를 보면 다음과 같이 기본 포트 번호가 함께 정의되어있는 것을 볼 수 있다.

그러나 만약 `https://google.com:443`과 같이 출처에 포트 번호가 명시적으로 포함되어 있다면 이 포트 번호까지 모두 일치해야 같은 출처라고 인정된다. 하지만 이 케이스에 대한 명확한 정의가 표준으로 정해진 것은 아니기 때문에, 더 정확히 이야기하자면 어떤 경우에는 같은 출처, 또 어떤 경우에는 다른 출처로 판단될 수도 있다. (진리의 케바케)

우리는 브라우저의 개발자 도구의 콘솔에서 `Location` 객체가 가지고 있는 `origin` 프로퍼티에 접근함으로써 손 쉽게 어플리케이션이 실행되고 있는 출처를 알아낼 수도 있다.

```jsx
console.log(location.origin);
```

## SOP(Same-Origin Policy)

웹 생태계에는 다른 출처로의 리소스 요청을 제한하는 것과 관련된 두 가지 정책이 존재한다. 한 가지는 이 포스팅의 주제인 CORS, 그리고 또 한 가지는 `SOP(Same-Origin Policy)`이다.

SOP는 지난 2011년, [RFC 6454](https://tools.ietf.org/html/rfc6454#page-5)에서 처음 등장한 보안 정책으로 말 그대로 “같은 출처에서만 리소스를 공유할 수 있다”라는 규칙을 가진 정책이다.

그러나 웹이라는 오픈스페이스 환경에서 다른 출처에 있는 리소스를 가져와서 사용하는 일은 굉장히 흔한 일이라 무작정 막을 수도 없는 노릇이니 몇 가지 예외 조항을 두고 이 조항에 해당하는 리소스 요청은 출처가 다르더라도 허용하기로 했는데, 그 중 하나가 “CORS 정책을 지킨 리소스 요청”이다. (참고로 CORS라는 이름이 처음 등장한 것은 2009년이라, SOP의 등장보다 빠르다)

## 같은 출처와 다른 출처의 구분

사실 두 개의 출처가 서로 같다고 판단하는 로직 자체는 굉장히 간단한데, 두 URL의 구성 요소 중 `Scheme`, `Host`, `Port`, 이 3가지만 동일하면 된다.

`https://evan-moon.github.io:80`라는 출처를 예로 들면 `https://` 이라는 스킴에 `evan-moon.github.io` 호스트를 가지고 `:80`번 포트를 사용하고 있다는 것만 같다면 나머지는 전부 다르더라도 같은 출처로 인정이 된다는 것이다.

필자의 블로그 출처인 `https://evan-moon.github.io`와 같은 출처로 인정되는 예시는 대략 이런 느낌이다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b1b36ef-7fb2-4985-a6f3-66e2a5738ffc/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b1b36ef-7fb2-4985-a6f3-66e2a5738ffc/Untitled.png)

## CORS는 어떻게 동작하나요?

웹 클라이언트 어플리케이션이 다른 출처의 리소스를 요청할 때는 HTTP 프로토콜을 사용하여 요청을 보내게 되는데, 이때 브라우저는 요청 헤더에 Origin이라는 필드에 요청을 보내는 출처를 함께 담아보낸다.

```jsx
Origin: https://evan-moon.github.io
```

이후 서버가 이 요청에 대한 응답을 할 때 응답 헤더의 Access-Control-Allow-Origin이라는 값에 “이 리소스를 접근하는 것이 허용된 출처”를 내려주고, 이후 응답을 받은 브라우저는 자신이 보냈던 요청의 Origin과 서버가 보내준 응답의 Access-Control-Allow-Origin을 비교해본 후 이 응답이 유효한 응답인지 아닌지를 결정한다.

[CORS는 왜 이렇게 우리를 힘들게 하는걸까?](https://evan-moon.github.io/2020/05/21/about-cors/)
