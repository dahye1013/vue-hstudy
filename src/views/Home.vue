<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/cactus.jpg" />
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <HelloWorld :msg="title" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
    };
  },
};
</script>

<style lang="scss" scoped>
$red-color: red;
.red-font {
  color: $red-color;
}
.title {
  font-size: 30px;
}
//
</style>
