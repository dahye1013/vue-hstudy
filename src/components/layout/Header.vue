<template>
  <header>
    <transition name="moveIn" appear>
      <div class="logo-text">HStudy - Vuex3</div>
    </transition>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
}
.logo-text {
  position: absolute;
  left: 5rem;
  top: 5rem;
  font-size: 5.6rem;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  color: #fff;
  letter-spacing: -0.5rem;

  // animation-name: moveInLeft;
  // animation-duration: 1s;
  // animation-iteration-count: 1; //반복횟수
  // animation-delay: 0.1s;
  // animation-fill-mode: backwards;
}
.moveiIn-enter {
  opacity: 0;
}

.moveiIn-enter-active,
.moveiIn-leave-active {
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-iteration-count: 1; //반복횟수
  animation-delay: 0.1s;
  animation-fill-mode: backwards;
  // transition: opacity 2.5s ease-out;
}

.moveiIn-leave-to {
  opacity: 0;
}
</style>
