<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/trip.jpg" />
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p class="red-font">red</p>
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
};
</script>

<style lang="scss" scoped>
$red-color: red;
.red-font {
  color: $red-color;
}
//
</style>
