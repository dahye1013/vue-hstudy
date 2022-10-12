<template>
  <div>
    <h2>Network issues.</h2>
    <h4>뒤로가기 버튼을 클릭하시고, 다시 시도하세요.</h4>
    <button @click="$router.push(-1)">뒤로가기</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
