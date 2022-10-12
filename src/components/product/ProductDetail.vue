<template>
  <div>
    <h2>productDetail</h2>
    <ul>
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
