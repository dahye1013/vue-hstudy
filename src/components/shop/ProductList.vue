<template>
  <div>
    <h2>Product List</h2>

    <h-spinner :loading="loading"></h-spinner>
    <!-- <Spinner :loading="loading"></Spinner> -->
    <!-- 상품 section -->
    <section class="section">
      <ul v-if="!loading">
        <li v-for="product in products" :key="product.id" class="product-box">
          <div class="product-item">
            <h4>
              {{ product.title }}
            </h4>
          </div>
          <div>
            {{ product.price | currency }}$ -
            {{ product.inventory }}
          </div>
          <button
            :disabled="!productIsInStock(product)"
            @click="addProductToCart(product)"
          >
            {{ 'add cart' | upperCase }}
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      // products: [],
      loading: false,
      productIndex: 1,
    };
  },

  computed: {
    // ...mapState('products', {
    //   products: (state) => state.items,
    // }),

    // ...mapGetters('products', {
    //   productIsInStock: 'productIsInStock',
    // }),

    ...mapState({
      products: (state) => state.items,
    }),

    ...mapGetters({
      productIsInStock: 'productIsInStock',
    }),
  },

  created() {
    /**
     * [Vuex action 호출]
     * - 두가지 방법이 있다.
     * 1.mapActions
     * 2.$store.dispatch
     *
     *  - map actions는 methods 영역에 spread 문법으로 메소드를 선언해놓고 사용하는 방식이다.
     *
     *  -> (개인의견)
     *      샘플링해봤을때는 $store.dispatch으로 명시적으로 사용하는게 더 좋은 것 같다.
     *      mapGetters에 선언해놓고, 사용하는 것을 methods 문법을 재확인해야하는 번거로움을 가진다.
     *      dispatch할때도 어느 모듈에 있는 action을 사용할 것인지 하기 때문에,
     *      spread문법으로 vue instance에 한번 더 선언하는 것은 오히려 더 행위를 복잡하게 하는 것 같다.
     *
     *   =>하지만, template에서 action을 호출할때는 mapAction 문법이 더 간결해서 나음
     *   =>각각 장단점이 있으니 더 고민해보자..
     *
     */
    this.loading = true;
    // action호출 (1) $store.dispatch----------------------
    this.$store
      .dispatch('fetchProducts')
      // .dispatch('products/fetchProducts')
      .then(() => (this.loading = false));

    //action호출 (2) mapActions---------------------------
    // this.fetchProducts.then(() => (this.loading = false));
  },

  methods: {
    // ...mapActions('cart', {
    //   addProductToCart: 'addProductToCart',
    // }),
    // ...mapActions('products', {
    //   fetchProducts: 'fetchProducts',
    // }),
    ...mapActions({
      addProductToCart: 'addProductToCart',
      fetchProducts: 'fetchProducts',
    }),
  },
};
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}

ul {
  width: 600px;
  li {
    display: flex;
    justify-content: space-between;
  }
}
.product {
  &-box {
    margin-bottom: 15px;
  }
  &-item {
    width: 250px;
  }
}
</style>
