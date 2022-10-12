import Vue from 'vue';
import VueRouter from 'vue-router';
import event from '@/router/modules/event';
import error from '@/router/modules/error';
import shop from '@/router/modules/shop';
Vue.use(VueRouter);

/**
 * [Route LifeCylc] ----------------------------------------------------------
 *
 * 1. beforeRouteEnter(routeTo, routeFrom, next)
 *  - called before component is created
 *  - doesn't have access to 'this'
 *
 * 1. beforeRouteUpdate(routeTo, routeFrom, next)
 *  - called when the route changes, but still usting the same component.
 *  - Has access to 'this'
 *
 * 1. beforeRouteLeave(routeTo, routeFrom, next)
 *  - called when this component is navigated away from.
 *  - Has access to 'this'
 *
 * [COMMON]
 * -!! All must call next() !!
 *
 * next()
 * -> confirm the navigation
 * next(false)
 * -> cancel navigation
 * next('/')
 * -> redirect to this path
 * next({name:'event-list'})
 * -> redirect to this named path
 *
 * -------------------------------------------------------------------------------
 */

const routes = [
  //[event sample]
  ...event,
  //[error sample]
  ...error,
  //[shop sample]
  ...shop,
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName:"about" */ '@/views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/**
 * [Global Route Guard - 전역 가드] sample -----------------------------
 * - auth는 적합하나, 로딩에는 적합하지 않음
 *   ->
 *
 * beforeRouteEnter
 * ->
 * beforeRouteUpdate
 * -> called when the route changes, but still using the same component
 *
 * fetch event 적합한 시점
 * beforeEnter : component가 created될때 호출된다.
 *
 */
import NProgress from 'nprogress';
// [afterEach] - 가장 먼저 실행되는 route hook
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
// [afterEach] - vue instance의 beforeCreate 이전 실행된다.
router.afterEach(() => {
  NProgress.done();
});
//----------------------------------------------------------------------

export default router;
