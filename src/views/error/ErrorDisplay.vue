<template>
  <div>
    <h4>Error...</h4>
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
