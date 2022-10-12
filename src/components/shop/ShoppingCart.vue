<template>
  <div>
    <!-- <h2>Shopping Cart</h2> -->

    <!-- 쇼핑카드 section -->
    <section>
      <ul>
        <li v-for="product in cartProducts" :key="product.id">
          {{ product.title }}
          {{ product.price | currency }}$ -
          {{ product.quantity }}
        </li>
      </ul>
      <strong>Total : {{ total | currency }}</strong>
      <h-base-button @click="checkout">checkout</h-base-button>
    </section>
    <!--  checkout 결과 section -->
    <section v-if="checkoutStatus" class="checkoutStatus">
      <div class="checkoutStatus-text">Checkout Result</div>
      <div :class="['checkoutStatus-text', `checkoutStatus-${checkoutStatus}`]">
        {{ checkoutStatus }}
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    // ...mapGetters('cart', {
    //   cartProducts: 'cartProducts',
    //   total: 'cartTotal',
    // }),
    // ...mapState('cart', {
    //   checkoutStatus: (state) => state.checkoutStatus,
    // }),
    ...mapGetters({
      cartProducts: 'cartProducts',
      total: 'cartTotal',
    }),
    ...mapState({
      checkoutStatus: (state) => state.checkoutStatus,
    }),

    checkoutStatusResult() {
      return this.checkoutStatus === 'success';
    },
  },

  methods: {
    ...mapActions(['checkout']),
    // ...mapActions('cart', ['checkout']),
  },
};
</script>

<style lang="scss" scoped>
.checkoutStatus {
  display: flex;
  justify-content: space-around;
  border: 1px solid;
  // padding: 10px 10px;
  margin: 10px 0;
  &-text {
    background-color: beige;
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  // checkout 성공 색상
  &-success {
    background-color: mediumseagreen;
  }
  // checkout 실패 색상
  &-fail {
    background-color: darkgray;
  }
}
</style>
