/**
 * [action module sample]
 * - cart, product 처럼 양쪽 모듈에서 호출하는 action의 경우, action을 store 루트 경로에서 분리하여 사용.
 * =>현재는 cart와 product에서 context중 root에 접근하여 action을 사용하고 있어서 사용할 필요 없음.
 *
 */

// import shop from '@/api/shop';
// export default {
//   fetchProducts({ commit }) {
//     return new Promise((resolve) => {
//       shop.getProducts((products) => {
//         //state를 바로 update X => mutation을 commit해야함
//         //mutation을 history log를 남겨서 debug하기 좋게 한다.
//         commit('setProducts', products);
//         resolve();
//       });
//     });
//   },

//   // cart + product에서 호출하는 경우
//   // 여러개의 모듈에서 호출하는 경우, 여기에 남겨둠

//   /**
//    * state는 local state만을 참조한다.
//    *
//    * @param {*} param0
//    * @param {*} product
//    */
//   addProductToCart({ state, getters, commit }, product) {
//     //1.재고 존재
//     if (getters.productIsInStock(product)) {
//       const cartItem = state.cart.find((item) => item.id === product.id);
//       //2.카트에 안담은 상품 (find cartItem)
//       if (!cartItem) {
//         commit('pushProductToCart', product.id);
//       } else {
//         commit('incrementQuantity', cartItem);
//       }
//       //샘플링은 이렇게 하는데, 실제로 장바구니에 담았다고 inventory가 줄면 안될듯
//       commit('decrementProductInventory', product);
//     }
//   },

//   checkout: function ({ state, commit }) {
//     shop.buyProducts(
//       state.cart,
//       //성공 callback
//       () => {
//         commit('emptyCart');
//         commit('setCheckoutStatus', 'success');
//       },
//       //실패 callback
//       () => {
//         commit('setCheckoutStatus', 'fail');
//       },
//     );
//   },
// };
