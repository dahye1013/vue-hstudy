<template>
  <div class="body">
    <div class="product">
      <div class="product-image">
        <img :src="image" width="500" />
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>{{ sale }}</p>

        <product-detail :details="details"></product-detail>

        <div class="flex-box">
          <div
            class="color-box padding-20"
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
          ></div>
        </div>

        <div class="flex-box">
          <h-base-button
            v-on:click="addToCart"
            :disabled="!inStock"
            :class="({ disabledButton: !inStock }, 'padding-20')"
          >
            Add to cart
          </h-base-button>
          <h-base-button @click="removeFromCart"
            >remove from cart</h-base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetail from '@/components/product/ProductDetail.vue';
export default {
  components: {
    ProductDetail,
  },

  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage:
            'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage:
            'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0,
        },
      ],
      onSale: true,
    };
  },

  methods: {
    /***
     * [mouse over event]
     * - mouse over 이벤트 selected 된 아이템 정보를 업데이트
     */
    updateProduct: function (index) {
      console.log('update product');
      this.selectedVariant = index;
    },
    //[emit event]
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    removeFromCart: function () {
      this.$emit(
        'remove-from-cart',
        this.variants[this.selectedVariant].variantId,
      );
    },
  },
  /***
   * [computed]
   * - selectede된 정보 기준으로 computed 적용하여 노출
   */

  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!';
      }
      return this.brand + ' ' + this.product + ' are not on sale';
    },
  },
};
</script>
<style scoped>
img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}
.flex-box {
  display: flex;
}
.padding-20 {
  margin-right: 20px;
}
</style>
