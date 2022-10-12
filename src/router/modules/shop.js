const basePath = '/shop';
// const directoryUrl = '@/views/shop';
export default [
  //   {
  //     path: `${basePath}`,
  //     name: 'shop',
  //     alias: '/',
  //     component: () => import(`${directoryUrl}/Shop`),
  //     meta: {
  //       title: 'Shop',
  //     },
  //   },
  //[shop sample]
  {
    path: `${basePath}`,
    alias: '/',
    name: 'shop',
    component: () =>
      import(/* webpackChunkName:"shop"*/ '@/views/shop/Shop.vue'),
    meta: {
      title: 'Shop',
    },
  },
  {
    path: `${basePath}/info`,
    name: 'product',
    component: () => import(`@/views/shop/Product`),
  },
];
