<template>
  <div class="body">
    <div class="cart">
      <p>Cart({{ cart.length }})</p>
    </div>
    <!-- product 정보 -->
    <product-info
      :premium="premium"
      @add-to-cart="updateCart"
      @remove-from-cart="removeItem"
    ></product-info>

    <div class="form-container">
      <product-tabs :tabs="tabs" :selectedTab.sync="selectedTab"></product-tabs>
      <!-- product review 목록 -->
      <product-review-list
        v-if="selectedTab === 'Reviews'"
        :reviews="reviews"
      ></product-review-list>
      <!-- product review 등록-->
      <product-review
        v-else-if="selectedTab === 'Make a Review'"
        @review-submit="addReview"
      ></product-review>
    </div>
  </div>
</template>

<script>
import ProductInfo from '@/components/product/ProductInfo.vue';
import ProductReview from '@/components/product/ProductReview.vue';
import ProductReviewList from '@/components/product/ProductReviewList.vue';
import ProductTabs from '@/components/product/ProductTabs.vue';
export default {
  components: {
    ProductInfo,
    ProductReview,
    ProductReviewList,
    ProductTabs,
  },

  data() {
    return {
      //[product-tab 컴포넌트 데이터]
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews',

      premium: true,
      cart: [],
      //[reviews 컴포넌트 데이터]
      reviews: [],
    };
  },
  methods: {
    addReview(productReview) {
      this.reviews.push(productReview);
    },
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      for (let i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}
</style>
