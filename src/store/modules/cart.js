import shop from '@/api/shop';
/**
 * [rootState]
 * (rootstate를 참조해야하는 이유?)
 * -> state는 local state만을 반영한다.
 * => 다른 모듈에 있는 getters, mutation을 호출하기 위해 필요하다.
 * => mutations and getters는 modules 내부 local state만을 참조한다.
 *   (actions에서도 context.state 는 local state만 참조한다.)
 * 즉, module 밖에서 특정 module에 접근하고 싶으면, global state를 참조해야한다. (rooteState)
 *
 * (사용법)
 * root state
 * -> getters에서는 3번째 매개변수(third argument)로 사용한다.
 *
 */

/**
 * [sampling 다시 진행중]
 *
 */

export const namespaced = true;

export const state = {
  cartItems: [],
  checkoutStatus: null,
};

export const getters = {
  // rootstate는
  cartProducts(state, getters, rootState) {
    return state.cartItems.map((cartItem) => {
      const product = rootState.items.find(
        // const product = rootState.products.cartItems.find(
        (product) => product.id === cartItem.id,
      );
      return {
        title: product.title,
        price: product.price,
        quantity: cartItem.quantity,
      };
    });
  },
  getCheckoutStatus(state) {
    return state.checkoutStatus;
  },
  cartTotal(state, getters) {
    let total = 0;
    getters.cartProducts.forEach(
      (product) => (total += product.price * product.quantity),
    );
    return total;
  },
};

export const actions = {
  //[상품 담기]
  addProductToCart(
    { state, getters, commit, rootState, rootGetters },
    product,
  ) {
    console.log(getters, rootState);
    //1.재고 존재
    if (rootGetters['productIsInStock'](product)) {
      // if (rootGetters['products/productIsInStock'](product)) {
      const cartItem = state.cartItems.find((item) => item.id === product.id);
      //2.카트에 안담은 상품 (find cartItem)
      if (!cartItem) {
        commit('pushProductToCart', product.id);
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      //샘플링은 이렇게 하는데, 실제로 장바구니에 담았다고 inventory가 줄면 안될듯
      //decrementProductInventory는 product모듈에 존재함.
      /**
       * [global action / mutation]
       * 3번째 인자에  {root:true} 를 넘긴다.
       */

      commit('decrementProductInventory', product, { root: true });
      // commit('products/decrementProductInventory', product, { root: true });
    }
  },
  //[결제]
  checkout: function ({ state, commit }) {
    shop.buyProducts(
      state.cartItems,
      //성공 callback
      () => {
        commit('emptyCart');
        commit('setCheckoutStatus', 'success');
      },
      //실패 callback
      () => {
        commit('setCheckoutStatus', 'fail');
      },
    );
  },
};
export const mutations = {
  pushProductToCart(state, productId) {
    state.cartItems.push({
      id: productId,
      quantity: 1,
    });
  },
  incrementItemQuantity(state, cartItem) {
    cartItem.quantity++;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },

  emptyCart(state) {
    state.cartItems = [];
  },
};

//[일반 샘픓링]--------------------------------
// export default {
// namespaced: true,
// state: {
//   items: [],
//   checkoutStatus: null,
// },
// getters: {
//   // rootstate는
//   cartProducts(state, getters, rootState) {
//     return state.items.map((cartItem) => {
//       const product = rootState.products.items.find(
//         (product) => product.id === cartItem.id,
//       );
//       return {
//         title: product.title,
//         price: product.price,
//         quantity: cartItem.quantity,
//       };
//     });
//   },
//   getCheckoutStatus(state) {
//     return state.checkoutStatus;
//   },
//   cartTotal(state, getters) {
//     let total = 0;
//     getters.cartProducts.forEach(
//       (product) => (total += product.price * product.quantity),
//     );
//     return total;
//   },
// },
//   getters: {},
//   cartProducts(state, getters, rootState) {
//     return state.items.map((cartItem) => {
//       const product = rootState.products.items.find(
//         (product) => product.id === cartItem.id,
//       );
//       return {
//         title: product.title,
//         price: product.price,
//         quantity: cartItem.quantity,
//       };
//     });
//   },
//   getCheckoutStatus(state) {
//     return state.checkoutStatus;
//   },
//   cartTotal(state, getters) {
//     let total = 0;
//     getters.cartProducts.forEach(
//       (product) => (total += product.price * product.quantity),
//     );
//     return total;
//   },
//   actions: {
//     // //[상품 담기]
//     // addProductToCart(
//     //   { state, getters, commit, rootState, rootGetters },
//     //   product,
//     // ) {
//     //   console.log(getters, rootState);
//     //   //1.재고 존재
//     //   if (rootGetters['products/productIsInStock'](product)) {
//     //     const cartItem = state.items.find((item) => item.id === product.id);
//     //     //2.카트에 안담은 상품 (find cartItem)
//     //     if (!cartItem) {
//     //       commit('pushProductToCart', product.id);
//     //     } else {
//     //       commit('incrementItemQuantity', cartItem);
//     //     }
//     //     //샘플링은 이렇게 하는데, 실제로 장바구니에 담았다고 inventory가 줄면 안될듯
//     //     //decrementProductInventory는 product모듈에 존재함.
//     //     /**
//     //      * [global action / mutation]
//     //      * 3번째 인자에  {root:true} 를 넘긴다.
//     //      */
//     //     commit('products/decrementProductInventory', product, { root: true });
//     //   }
//     // },
//     // //[결제]
//     // checkout: function ({ state, commit }) {
//     //   shop.buyProducts(
//     //     state.items,
//     //     //성공 callback
//     //     () => {
//     //       commit('emptyCart');
//     //       commit('setCheckoutStatus', 'success');
//     //     },
//     //     //실패 callback
//     //     () => {
//     //       commit('setCheckoutStatus', 'fail');
//     //     },
//     //   );
//     // },
//   },

//   mutations: {
//     pushProductToCart(state, productId) {
//       state.items.push({
//         id: productId,
//         quantity: 1,
//       });
//     },
//     incrementItemQuantity(state, cartItem) {
//       cartItem.quantity++;
//     },

//     setCheckoutStatus(state, status) {
//       state.checkoutStatus = status;
//     },

//     emptyCart(state) {
//       state.itemss = [];
//     },
//   },
// };
