<template>
  <div class="form-container">
    <h1>
      {{ $route.meta.title }}
    </h1>
    <img alt="Vue logo" src="@/assets/logo.png" />

    <product-list> </product-list>
    <hr />
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import ProductList from '@/components/shop/ProductList.vue';
import ShoppingCart from '@/components/shop/ShoppingCart.vue';
export default {
  components: {
    ProductList,
    ShoppingCart,
  },
};
</script>

<style lang="scss" scoped></style>
