import shop from '@/api/shop';

export const state = {
  items: [],
};
export const getters = {
  availableProducts(state) {
    return state.items.filter((product) => product.inventory > 0);
  },
  productIsInStock() {
    return (product) => {
      return product.inventory > 0;
    };
  },
};
export const mutations = {
  setProducts(state, products) {
    state.items = products;
  },
  pushProductToCart(state, productId) {
    state.cartItems.push({
      id: productId,
      quantity: 1,
    });
  },
  decrementProductInventory(state, product) {
    product.inventory--;
  },
};
export const actions = {
  fetchProducts({ commit }) {
    return new Promise((resolve) => {
      shop.getProducts((products) => {
        //state를 바로 update X => mutation을 commit해야함
        //mutation을 history log를 남겨서 debug하기 좋게 한다.
        commit('setProducts', products);
        resolve();
      });
    });
  },
};

// export default {
//   /**
//    * [namesspaced]
//    * - state, getters, mustaions 를 local로 사용할 수 있다.
//    *
//    * [root~]
//    * - rooteState, rooteGetters, rooteAction 등등
//    * - local 외에 다른 모듈을 호출해서 사용할 수 있다.
//    * - 기존 context는 local 밖에 사용 못함.
//    *
//    */
//   namespaced: true,
//   /**
//    * [state]
//    * = data
//    */
//   state: {
//     items: [],
//   },

//   /**
//    * [getters]
//    * = computed properties
//    * perfect for filter or calculate something on runtime
//    */
//   getters: {
//     availableProducts(state) {
//       return state.items.filter((product) => product.inventory > 0);
//     },

//     productIsInStock() {
//       return (product) => {
//         return product.inventory > 0;
//       };
//     },
//   },

//   /**
//    * [Action]
//    * =method
//    * make the call - run mutation
//    * 중요 !! never update state !!
//    * dispatch로 action 호출하고, action에서 commit으로 mutation 호출
//    *
//    */
//   /**
//    * [update state]
//    */
//   actions: {
//     fetchProducts({ commit }) {
//       return new Promise((resolve) => {
//         shop.getProducts((products) => {
//           //state를 바로 update X => mutation을 commit해야함
//           //mutation을 history log를 남겨서 debug하기 좋게 한다.
//           commit('setProducts', products);
//           resolve();
//         });
//       });
//     },
//   },

//   mutations: {
//     setProducts(state, products) {
//       state.items = products;
//     },
//     pushProductToCart(state, productId) {
//       state.cart.push({
//         id: productId,
//         quantity: 1,
//       });
//     },

//     decrementProductInventory(state, product) {
//       product.inventory--;
//     },
//   },
// };
