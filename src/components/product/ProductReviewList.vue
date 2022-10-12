<template>
  <div>
    <div class="review-form">
      <h3>Review 목록</h3>
      <ul v-if="reviews.length > 0">
        <li v-for="(review, index) in reviews" :key="index">
          <p>Name: {{ review.name }}</p>
          <p>Rating: {{ review.rating }}</p>
          <p>Review: {{ review.review }}</p>
        </li>
      </ul>
      <div v-else>there is no review</div>
    </div>
  </div>
</template>

<script>
// import eventBus from '@/utils/eventBus';

export default {
  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      //   reviews: [],
    };
  },
  methods: {},
  mounted() {
    // eventBus.$on('review-submitted', (productReview) => {
    //   this.reviews.push(productReview);
    // });
  },
};
</script>

<style lang="scss" scoped>
li {
  border-bottom: 1px solid;
}
</style>
