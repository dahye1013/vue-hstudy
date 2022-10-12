import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// import cart from './modules/cart';
// import products from './modules/products';
import * as cart from './modules/cart';
import * as products from './modules/products';
import * as user from './modules/user';
import * as notification from './modules/notification';

import event from './modules/event';

/**
 * actions, muataions, and getters are always registered under the global namespace.
 * => even when using modules
 * no matter where they're declared, they're called without their module name
 */

export default new Vuex.Store({
  /**
   * [module]
   * - application 규모가 커지면 복잡해진다.
   * -> modules 분리함으로서 관리
   */

  // (1) 일반적인 모듈 분리방법
  modules: {
    // cart,
    // products,
    notification,
    event,
  },

  /**
   * (2) 가이드 받아서 새로 진행한 모듈 분리 방법   *
   * - rootState에 접근하기 용이하다.
   *  => event action에서 user state를 접근해야하는 등,
   *  => 모듈 간에 action이나 mutation이 발생하는 로직을 처리하기 좋다.
   *
   * - 프로젝트 범위가 커졌을 때, 비즈니스 단위로 분리해서 관리하기 좋다.
   *
   * (질문)
   * 1. state에 너무 많이 올라가면 관리하기 어렵지 않은지??
   *    주요 비즈니스만 이렇게 처리하는지?
   *   => state안에 명명 규칙 잘 해서 Object 단위로 말아서 사용하면 될거같긴한데...
   */

  state: {
    ...user.state,
    ...cart.state,
    ...products.state,
  },
  getters: {
    ...cart.getters,
    ...products.getters,
  },
  actions: {
    ...cart.actions,
    ...products.actions,
  },
  mutations: {
    ...cart.mutations,
    ...products.mutations,
  },

  /**
   * 양쪽 모듈에서 호출해야하는 actions은 따로 분리하기도 한다.
   * - rootSate식으로 다른 모듈에서 루트로 접근하여 처리시 사용 X
   */
  // actions,
});
