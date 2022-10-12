<template>
  <div class="nav">
    <router-link to="/shop">shop</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="{ name: 'eventList' }">Event List</router-link>
    <router-link :to="{ name: 'eventCreate' }">Event Create</router-link>
    <router-link :to="{ name: 'product' }">product</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
