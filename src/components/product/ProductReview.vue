<template>
  <div class="form-container">
    <!-- prevent로 페이지를 refresh하는 것을 막는다. -->
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Review 등록</h3>

      <p v-if="errors.length > 0">
        <b>please correct the following error(s)</b>
      </p>

      <ul>
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>

      <p>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </p>
      <p>
        <label for="review">Review</label>
        <textarea id="review" v-model="review"> </textarea>
      </p>

      <p>
        <label for="rating">Rating</label>
        <select id="rating" v-model.number="rating">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
// import eventBus from '@/utils/eventBus';
export default {
  data() {
    return {
      name: '',
      review: '',
      rating: '',
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
        };
        // [일반 emit]
        this.$emit('review-submit', productReview);
        // [event bus sample]
        // - reviewList에서 on
        // eventBus.$emit('review-submit', productReview);

        //초기화
        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        //   현재 프로젝트에서 진행하고 있는 error 메세지 방법과 유사함
        if (!this.name) this.errors.push('Name required');
        if (!this.review) this.errors.push('review required');
        if (!this.rating) this.errors.push('rating required');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
