# Router

## Reacting to Params Changes

- Params 변경 사항에 반응하기

매개 변수와 함께 라우트를 사용할 때 동일한 컴포넌트 인스턴스가 재사용 된다.

→ 두 라우트 모두 동일한 컴포넌트를 렌더링하므로, 이전 인스턴스를 삭제 한 다음 새 인스턴스를 만드는 것보다 효율적

→ 하지만, **컴포넌트의 라이프 사이클 훅이 호출되지 않음.**

⇒ 동일한 컴포넌트의 params 변경 사항에 반응하려면 $route 객체를 사용하면 된다.

```jsx
const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // 경로 변경에 반응하여...
    },
  },
};
```

`beforeRouteUpdate` 가드를 사용

```jsx
const User = {
  template: '...',
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
  },
};
```

### Catch all / 404 Not found Route

일반 매개 변수는 /와 URL 조각 사이의 문자만 일치한다. 만약 모든 항목을 매치하고 싶다면 별표(\*)를 사용한다.

```jsx
{
  // will match everything
  path: '*';
}
{
  // will match anything starting with `/user-`
  path: '/user-*';
}
```

별표 경로를 사용할 때는 별표 경로가 끝에 오도록 경로를 설정해야한다. {path: '\*'} 경로는 일반적으로 404 클라이언트 사이드에 사용된다.

History 모드를 사용하는 경우 서버도 올바르게 구성해야 합니다.

### Advanced Matching Patterns

- 고급 매칭 패턴

vue-router는 정규식 엔진을 통해서 경로 matching을 제공한다. 그래서 옵션으로 사용 가능한 다양한 옵션들이 있다. 하단 링크의 깃허브에서 확인 할 수 있다,

[GitHub - pillarjs/path-to-regexp at v1.7.0](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)

### Matching Priority

라우트가 많을 때, URL이 겹치기도 한다. 이때 우선 선언된 것이 우선 순위가 높다.

## Programmatic Navigation

`<router-link>`를 사용하여 선언적 네비게이션용 anchor 태그를 만드는 것 외에 라우터의 인스턴스 메소드를 사용하여 프로그래밍을 수행 할 수 있다.

> Vue 인스턴스 내부에서 라우터 인스턴스에 $router로 액세스 할 수 있습니다. 그러므로this.$router.push를 사용 할 수 있다.

다른 URL로 이동하려면

### `router.push`

- 다른 URL 로 이동시 사용하면 된다.
- 새로운 항목을 히스토리 스택에 넣기 때문에 브라우저 뒤로 가기하면 이전 URL로 이동한다.
- `<router-link>`를 클릭 할 때 내부적으로 호출되는 메소드이다.

```jsx
// literal string path
router.push('home');

// object
router.push({ path: 'home' });

// named route
router.push({ name: 'user', params: { userId: '123' } });

// with query, resulting in /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } });
```

> **[주의]** path 가 제공되는 경우 params 는 무시된다!

```jsx
const userId = '123';
router.push({ name: 'user', params: { userId } }); // -> /user/123
router.push({ path: `/user/${userId}` }); // -> /user/123
// This will NOT work
router.push({ path: '/user', params: { userId } }); // -> /user
```

⇒ `router-link` 컴포넌트에도 같은 규칙이 적용된다.

### `router.replace(location)`

- router.push 와 같은 역할을 하지만, 히스토리 항목을 추가하지 않고 탐색한다.
- 현재 항목을 대체한다.

### `router.go(n)`

- window.history.go(n)과 비슷하게 히스토리 스택에서 앞 또는 뒤로 이동하는 단계를 나타내는 정수를 매개 변수를 사용한다.

```jsx
// 한 단계 앞으로 갑니다. history.forward()와 같습니다. history.forward()와 같습니다.
router.go(1);

// 한 단계 뒤로 갑니다. history.back()와 같습니다.
router.go(-1);

// 3 단계 앞으로 갑니다.
router.go(3);

// 지정한 만큼의 기록이 없으면 자동으로 실패 합니다.
router.go(-100);
router.go(100);
```

### History Manipulation

`router.push`, `router.replace,` `router.go`

→ `window.history.pushState`, `window.history.replaceState,` `window.history.go`

router와 window.history는 이렇게 대응되는 양상을 가지고 있다.

router은 window.history APIs를 모방하고 있다.

[Browser History APIs (opens new window)](https://developer.mozilla.org/en-US/docs/Web/API/History_API),에 있숙하다면 Vue Router에 쉽게 적응할 수 있을 것이다.

## Router-Link

- 라우터 지원 앱에서 사용자 네비게이션을 가능하게하는 컴포넌트
- 목표 위치는 to prop로 지정된다.
- 기본적으로 올바른 href를 갖는 `<a>`태그로 렌더링 되지만 tag prop로 구성 될 수 있다.
- 대상 라우트가 활성화되어 있으면 링크가 자동으로 active CSS 클래스를 가져온다.
- 클릭 이벤트를 차단하여 브라우저가 페이지를 다시 로드하지 않도록 한다.

### Props

- **to**

  — 링크의 대상 라우트

  — 내부적으로 router.push()에 전달된다.

```html
<!-- 리터럴 string -->
<router-link to="home">Home</router-link
><!-- 이렇게 렌더링 됩니다. -->
<a href="home">Home</a
><!-- `v-bind`를 이용한 표현식 -->
<router-link v-bind:to="'home'">Home</router-link
><!-- `v-bind`를 생략하면 다른 prop를 바인딩 하는 것과 같습니다. -->
<router-link :to="'home'">Home</router-link
><!-- 위와 같습니다. -->
<router-link :to="{ path: 'home' }">Home</router-link
><!-- 이름을 가지는 라우트 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link
><!-- 쿼리가 있으면, `/register?plan=private` 이 됩니다. -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}"
  >Register</router-link
>
```

- **replace**

— replace prop를 설정하면 클릭할 때 router.push() 대신 router.replace()를 호출

— 히스토리 레코드 안남김

### a 태그 대신에 Router-Link를 사용하는 이유

- a태그는 모든 script , style, js 를 refecth한다.
- SPA에서는 data가 변화되는 것만 fetch하기를 원한다.

  → 일반 홈페이지에서 모든 것을 re-fetch하는 것과 다름.

  ⇒ SPA의 changes 빠른 이유임. 전체 페이지를 reload하지 않는것.

- **Router-link intercept the click event**

  → router-link의 tag를 살펴보면 a로 구성되어 있는 것을 확인할 수 있다.

  →하지만 click 이벤트가 exact하지 않음. 그래서 브라우저에서 reload를 실행하지 않는다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6cb54810-4c3d-46aa-9809-3964ebfd0181/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210817T215615Z&X-Amz-Expires=86400&X-Amz-Signature=3a445f29afc796bebb371eefc970ae78d31d4786cf8054ebf7a315fc85088bf2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

### Router-Link dev

- Vue 개발자 도구에서 세번째 아이콘을 통해서 router 관련된 path 및 name 정보를 얻을 수 있다.
- store파일에 router-link에 대한 destination을 선언해놓고 사용하면 더 간편하게 경로를 정리하여 사용할 수 있다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8e8ba5e-82b5-436f-b4cd-d08838ef2be7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210817T215634Z&X-Amz-Expires=86400&X-Amz-Signature=33688be4792163692a97e454720d90504b7373071ce76af520a425a3ef9400f2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

## Lazy Load

- 처음에 페이지를 키면 app.js 번들이 load 되는데, 여기에 모든 어플리케이션 JS 코드가 응집되어 있다.

  → 다른 라우터로 이동해도 app.js 에서 꺼내오기 때문에 아무 변화가 없음.

- 해당 페이지에 갔을때 그 화면만 불러온다면, 즉 웹팩을 사용해서 **code splitting**해서 번들을 작은 단위로 쪼개면 (chunks 혹은 bundles 이라고 불린다) app이 더 가벼워지고 빨라질 것이다.

  ⇒ lazy load를 통해서 특정 route를 방문했을때 load해오도록 해보자.

- **code splitting make APP lighter and fater**

  ⇒ 필요한 것만 load해주기 때문이다.

[Code Splitting | webpack](https://webpack.js.org/guides/code-splitting/)

### Grouping Components in the Same Chunk

같은 그룹으로 묶어서 async chunk 하고 싶으면, 주석으로 같은 webpackChunkName 를 지정하면 된다. (named chunk라고 불리는 방식)

웹팩 2.4 이상에서 지원한다.

```jsx
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue');
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue');
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue');
```

[Lazy Loading Routes | Vue Router](https://router.vuejs.org/guide/advanced/lazy-loading.html)

## Hash and History Mode

### Hash Mode

It uses the URL hash to stimulate a full URL, so that page won't be reloaded when the URL changes.

URL이 변경될 때 페이지가 다시 로드되지 않는다.

### History Mode

It uses `history.pushState`API to achive URL navigation without page reload.

페이지를 리로드하지 않고, url을 탐색한다. SPA가 단일 페이지 클라이언트 앱이라서 사용자가 직접 주소에 접속하면 404가 뜬다.

## Route Meta Fields

때로 임의 정보를 라우트에 선언하고 싶을때 (transition name, 접근제한 등등), meta property에 객체 타입으로 선언함으로서 사용 할 수 있다.

```jsx
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field - 객체 타입으로 선언되어 사용함
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
```

- 메타 필드 접근 방법

`route`설정에서 라우트 객체는 route record 라고 불린다. route record는 중첩될 수 있다. route가 일치하면, 둘 이상의 route record는 잠재적으로 일치한다.

→ 위의 코드 예시는 상위 route record와 하위 route record가 일치한다.

→ route record가 일치하는 모든 route record는 `$route` 객체에 `$route.matched` 배열로 노출된다.

⇒ 즉, `$route.matched`를 반복하여 route record 메타 필드를 확인해야한다.

```jsx
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
    // 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // 반드시 next()를 호출하십시오!
  }
});
```

## Transition

Vue는 `**transition` 래퍼 컴포넌트를 제공한다.\*\*

⇒ 모든 엘리먼트 또는 컴포넌트에 대한 진입 / 진출 트랜지션을 추가 가능

- 조건부 렌더링 (`v-if` 사용)
- 조건부 출력 (`v-show` 사용)
- 동적 컴포넌트
- 컴포넌트 루트 노드

```html
<div id="demo">
  <button v-on:click="show = !show">Toggle</button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

`transition` 컴포넌트로 싸여진 엘리먼트가 삽입되거나 제거 될때 일어난다.

1. Vue는 대상 엘리먼트에 CSS 트랜지션 또는 애니메이션이 적용 여부를 자동 감지한다.

   ⇒ CSS 트랜지션 클래스가 적절한 타이밍에 추가 / 제거

2. 트랜지션 컴포넌트가 **[JavaScript 훅](https://kr.vuejs.org/v2/guide/transitions.html#JavaScript-Hooks)**를 제공하면 이러한 훅은 적절한 타이밍에 호출된다/
3. CSS 트랜지션 / 애니메이션이 감지되지 않고 JavaScript 훅이 제공 되지 않으면 삽입 또는 제거를 위한 DOM 작업이 다음 프레임에서 즉시 실행됩니다 (참고: 이는 Vue의 `nextTick` 개념과는 다른 브라우저 애니메이션 프레임).

### Transition Classes

진입 / 진출 트랜지션에는 6개 클래스가 적용된다.

1. `v-enter`: enter의 시작 상태. 엘리먼트가 삽입되기 전에 적용되고 한 프레임 후에 제거
2. `v-enter-active`: enter에 대한 활성 및 종료 상태. 엘리먼트가 삽입되기 전에 적용. 트랜지션 / 애니메이션이 완료되면 제거.
3. `v-enter-to`: **2.1.8 이상 버전에서 지원.** 진입 상태의 끝에서 실행. 엘리먼트가 삽입된 후 (동시에 `v-enter`가 제거됨), 트랜지션/애니메이션이 끝나면 제거되는 하나의 프레임을 추가.
4. `v-leave`: leave를 위한 시작 상태. 진출 트랜지션이 트리거 될 때 적용되고 한 프레임 후에 제거.
5. `v-leave-active`: leave에 대한 활성 및 종료 상태. 진출 트랜지션이 트리거되면 적용되고 트랜지션 / 애니메이션이 완료되면 제거.
6. `v-leave-to`: **2.1.8 이상 버전에서 지원.** 진출 상태의 끝에서 실행. 진출 트랜지션이 트리거되고 (동시에 `v-leave`가 제거됨), 트랜지션/애니메이션이 끝나면 제거되는 하나의 프레임을 추가.

⇒ router-view에 composition 컴포넌트를 래핑하여 다양한 트랜지션을 유도 할 수 있다.

더 자세한 내용은 transition 하단 링크들을 통해서 확인 할 것.

[Enter/Leave & List Transitions - Vue.js](https://vuejs.org/v2/guide/transitions.html#Transition-Classes)

[Transitions | Vue Router](https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition)

[Enter/Leave & List Transitions](https://www.notion.so/Enter-Leave-List-Transitions-482c5409794149f3ab2508dd3eb3979e)

![Untitled](https://vuejs.org/images/transition.png)

## Data Fetching

라우트가 활성화 될 때 서버에서 데이터를 가져와야 할 떄가 있다. 예를 들어, 사용자 프로필을 렌더링하기 전에 서버에서 사용자의 데이터를 가져와야 한다. 이때 사용할 수 있는 두 가지 방법이 있다.

1. **Fetching After Navigation 탐색 후 가져오기**

   먼저 탐색하고 들어오는 컴포넌트 라이프 사이클 훅에서 데이터를 가져온다.

   데이터를 가져오는 동안 로드 상태를 표시한다.

2. **Fetching Before Navigation 탐색 전 가져오기**

   라우트 가드 경로 탐색하기 전 데이터를 가져오고 그 후에 탐색한다.

→ 두 가지 방법 모두 가능하며, 유저 경험을 어디에 두는지에 따라 달라진다.

⇒ 공식문서에서 제공하는 두 가지 방식의 샘플링은 모두 watch를 기반으로 하고 있다.

(watch를 기반으로 data를 fetch하는 핸들러 사용하고 있음)

### **Fetching After Navigation**

컴포넌트를 즉시 탐색하고 랜더링하여 컴포넌트 created 훅에서 데이터를 가져온다.

```jsx
<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
```

```jsx
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      const fetchedId = this.$route.params.id;
      // replace `getPost` with your data fetching util / API wrapper
      getPost(fetchedId, (err, post) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.id !== fetchedId) return;
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.post = post;
        }
      });
    },
  },
};
```

### **Fetching Before Navigation**

새 경로로 이동하기 전에 데이터를 가져온다.

들어오는 컴포넌트에서 `**beforeRouteEnter**` 가드에서 데이터를 가져올 수 있으며 페치가 완료되면 next만 호출 할 수 있습니다.

```jsx
export default {
  data() {
    return {
      post: null,
      error: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    getPost(to.params.id, (err, post) => {
      next((vm) => vm.setData(err, post));
    });
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  beforeRouteUpdate(to, from, next) {
    this.post = null;
    getPost(to.params.id, (err, post) => {
      this.setData(err, post);
      next();
    });
  },
  methods: {
    setData(err, post) {
      if (err) {
        this.error = err.toString();
      } else {
        this.post = post;
      }
    },
  },
};
```

## Navigation Guard

vue router에서 제공하는 탐색 가드는 주로 redirect , cancel 방식으로 navigation을 보호하는데 사용된다. 경로 탐색 프로세스에 연결 방법은 전역, 라우터별 또는 컴포넌트 별 여러 가지가 있다.

[한국어 ver] — Params 또는 쿼리를 변경하면 네비게이션 가드가 실행되지 않습니다. 단순히 $route 객체를 감시하고 그 변화에 반응하십시오. 또는 컴포넌트 가드의 beforeRouteUpdate를 사용하십시오

[English ver] — Remember that **params or query changes won't trigger enter/leave navigation guards**. You can either watch the $route object to react to those changes, or use the beforeRouteUpdate in-component guard.

[중국어 ver] 记住参数或查询的改变并不会触发进入/离开的导航守卫。你可以通过观察 $route 对象来应对这些变化，或使用 beforeRouteUpdate 的组件内守卫。

— 영어랑 한글이 번역이 다르게 되어있는거 같음; 중국어도 보니까 영어버전이 맞는것 같음...

또한 watch를 사용하거나 beforeRouteUpdate를 컴포넌트가드로 사용할 수 있다.

[Dynamic Route Matching | Vue Router](https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes)

### Global Before Guards

```jsx
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

beforeEnter function은 3개의 인자를 받는다.

- **`to: Route`**: the target **[Route Object](https://router.vuejs.org/api/#the-route-object)** being navigated to.
- **`from: Route`**: the current route being navigated away from.
- **`next: Function`**: this function must be called to **resolve** the hook. The action depends on the arguments provided to `next`:

```jsx
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

Global before guards are called in creation order, whenever a navigation is triggered. Guards may be resolved asynchronously, and the navigation is considered **pending** before all hooks have been resolved.

Every guard function receives three arguments:

- 라우트와 일치하는 모든 라우트 레코드는 $route객체에 `$route.matched` 배열에 노출된다.

  ⇒ `$route.matched` 를 반복하여 라우트 레모크의 메타 필드를 검사해야 한다.

```jsx
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
    // 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // 반드시 next()를 호출하십시오!
  }
});
```

**중요 !!** Make sure that the next function is called **exactly once** in any given pass through the navigation guard. It can appear more than once, but only if the logical paths have no overlap, otherwise the hook will never be resolved or produce errors. Here is an example of redirecting to user to /login if they are not authenticated:

```jsx
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  // if the user is not authenticated, `next` is called twice
  next();
});
```

```jsx
// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  else next();
});
```

### Global Resolve Guards

- `router.beforeResolve`

  `router.beforeEach`와 유사하다.

  모든 컴포넌트 가드와 async route 컴포넌트를 불러온 후 네비게이션 가드를 확인하기 전에 호출된다는 차이점을 가진다.

### Global After Hooks

Guard와 달리 이 Hooks 에서는 `next` unction을 불러 올 수 없다.

또한 navaigation에 영향을 주지 않는다.

```jsx
router.afterEach((to, from) => {
  // ...
});
```

### Per-Route Guard

라우트 설정에서 직접적으로 `beforeEnter` 가드를 지정할 수 있다.

이 가드는 global before guards와 같은 작동을 한다.

```jsx
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      },
    },
  ],
});
```

### In-Component Guards

라우트 컴포넌트 내에서도 네비게이션 가드를 정의 할 수 있다.

옵션은 다음과 같다.

```jsx
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  beforeRouteUpdate(to, from, next) {
    // called when the route that renders this component has changed.
    // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
    // has access to `this` component instance.
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  },
};
```

- `beforeRouteEnter`

  this에 접근할 수 없다. — 네비게이션 확인전 가드 호출, 컴포넌트 생성전

  콜백으로 next() 에는 접근 가능. — 콜백으로 next를 지원하는 유일한 가드이다.

  ```jsx
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // access to component instance via `vm`
    })
  }
  ```

- `beforeRouteUpdate`

  ```jsx
  beforeRouteUpdate (to, from, next) {
    // just use `this`
    this.name = to.params.name
    next()
  }
  ```

- `beforeRouteLeave`

  일반적으로 사용자가 실수로 화면을 떠나려고 할 때 (수정을 저장하지 않고 등) 사용한다.

  네비게이션에서 next 호출하는 것을 `next(false)` 로 취소시킬 수 있다.

  ```jsx
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
  ```

### The Full Navigation Resolution Flow

1. Navigation triggered.
2. Call `beforeRouteLeave` guards in deactivated components.
3. Call global `beforeEach` guards.
4. Call `beforeRouteUpdate` guards in reused components.
5. Call `beforeEnter` in route configs.
6. Resolve async route components.
7. Call `beforeRouteEnter` in activated components.
8. Call global `beforeResolve` guards.
9. Navigation confirmed.
10. Call global `afterEach` hooks.
11. DOM updates triggered.
12. Call callbacks passed to `next` in `beforeRouteEnter` guards with instantiated instances.

## Scroll Behavior

새로운 경로로 이동시에, 스크롤 위치를 유지할 수 있다.

라우트 탐색에서 스크롤 통작을 정의하여 사용한다.

> **주의! —** 브라우저에서 `history.pushState` 를 지원하는 경우에만 사용 할 수 있다.

```jsx
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // 원하는 위치로 돌아가기
  }
})
```

`scrollBehavior` 함수는 `to`와 `from` 라우트 객체를받는다.

세 번째 전달인자인 `savedPosition`은 브라우저의 뒤로/앞으로 버튼으로 트리거되는 `popstate` 네비게이션인 경우에만 사용할 수 있다.

이 함수는 스크롤 위치 객체를 반환한다.

- `{ x: number, y: number }`
- `{ selector: string, offset? : { x: number, y: number }}` (offset은 2.6.0 이상만 지원)

### Async Scrolling

position을 promise 타입으로 return 받을 수 있다.

```jsx
scrollBehavior (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 500)
  })
}
```

페이지 전환 구성 요소로서 이벤트를 연결하여, 페이지 전환과 잘 작동시킬 수 있지만, 다양성과 복잡성이 발생할 수 있기 때문에 잘 사용에 유의해야한다.

### Smooth Scrolling

`behavior` 옵션으로 브라우저에서 지원하는 'smooth' 옵션을 넣어줄 수 있다.

```jsx
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth',
    }
  }
}
```

[ScrollToOptions.behavior - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior)

## Navigation Failures

`router-link`를 사용할때, vue router는 navigation의 트리거가 되는 `router.push`를 호출한다. 하지만, 특정 상황에서는 새로운 페이지를 이동되지 않고 남아있는 경우가 발생한다.

- 이동하려는 페이지에 이미 있는 경우
- navigation guard가 `next(false)`를 호출하여 중단시키는 경우
- navigation guard가 `next(new Error())` 를 던지는 경우

router-link를 사용할 때, 이러한 오류들은 로그되지 않는다. 하지만, `router.push` 혹은 `router.replace`를 사용하는 경우 Uncaught (in promise) Error 메세지와 구체적인 메세지 콘솔에서 확인 할 수 있다.

> **Background story**
> In v3.2.0, Navigation Failures were exposed through the two optional callbacks of `router.push`: `onComplete` and `onAbort`.
> Since version 3.1.0, `router.push` and `router.replace` return a Promise if no `onComplete`/`onAbort` callback is provided. This Promise resolves instead of invoking `onComplete` and rejects instead of invoking `onAbort`.

-

### Detecting Navigation Failures

### NavigationFailureType

Navigation Failures 들은 몇가지 속성을 가지고 있는 인스턴스이다.

Router에서 에러를 확인하고 싶으면 `isNavigationFailure` 펑션을 활용하면 된다.

```jsx
import VueRouter from 'vue-router';
const { isNavigationFailure, NavigationFailureType } = VueRouter;

// trying to access the admin page
router.push('/admin').catch((failure) => {
  if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
    // show a small notification to the user
    showToast('Login in order to access the admin panel');
  }
});
```

- 두 번째 매개 변수(`isNavigationFailure(failure)`)를 생략하면 타입 체크하지 않고, Navigation Failure인지만 체크한다.

### `NavigationFailureType`

`NavigationFailureType` 은 개발자가 다양한 navigation 실패 유형을 구분하는 것을 돕는다.

이것은 4가지 타입으로 구분된다.

- `redirected`: `next(newLocation)` 내부 네비게이션 가드에서 redirect로 다른 곳으로 호출됨
- `aborted`: `next(false)` 가 네비게이션 가드에서 호출됨.
- `cancelled`: 현재 네비게이션이 수행이 완료되기 전에 새로운 네비게이션(페이지 이동) 이 발생. ex) navigation guard 대기하는 동안 새로운 `router.push` 발생.
- `duplicated`: 이미 해당 위치에 있어서 이동이 금지 됨.

  ⇒ error catch할 때, 해당 type들을 활용하면 될듯 .

  ⇒ duplicated라는 error를 catch할 때, 이름

### Navigation Failures's properties

모든 네비게이션 실패는 탐색의 대상 및 현재 위치를 반영한다.

```jsx
// trying to access the admin page
router.push('/admin').catch((failure) => {
  if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
    failure.to.path; // '/admin'
    failure.from.path; // '/'
  }
});
```
