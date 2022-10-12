export default [
  /**
   * [error page]
   * - 진행중....
   * - axios 호출이 잘못되었을때 catch하려고 했는데 아직 진행중
   */
  {
    path: '/error/:error',
    name: 'errorDisplay',
    props: true,
    component: () =>
      import(/* webpackChunkName:"about" */ '@/views/error/ErrorDisplay.vue'),
  },
  /**
   * [404 page]
   * - 경로가 잘못되었을때 redirect
   */
  {
    path: '/404',
    name: '404',
    props: true,
    component: () =>
      import(/* webpackChunkName:"about" */ '@/views/error/NotFound.vue'),
  },
  //navigation이 존재하지 않으면 모두 catch해서 404페이지로 redirect 시킨다.
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }, //해당하는 page의 리소스가 존재하지 않으면 props로 받아서 표시
  },
  {
    path: '/networkIssue',
    name: 'netWorkIssue',
    component: () =>
      import(
        /*webpackChunkName:"NetWorkIssue"*/ '@/views/error/NetWorkIssue.vue'
      ),
  },
];
