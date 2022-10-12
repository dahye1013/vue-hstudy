<template>
  <div>
    <h1>Not Found</h1>
    <h3>{{ resource }} - 존재하지 않는 페이지입니다.</h3>
    <router-link to="/">
      <h4>Shop으로 가기</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  font-weight: 700;
  color: #39b982;
  text-decoration: none;
}
</style>
