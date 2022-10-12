<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <NotificationContainer></NotificationContainer>
    <!-- reload components when the url jchanges
        - including query parameters -->
    <router-view class="container" :key="$route.fullPath" />
    <Footer></Footer>
  </div>
</template>
<script>
import NotificationContainer from '@/components/NotificationContainer.vue';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import Nav from '@/components/layout/Nav.vue';
export default {
  components: {
    Header,
    Footer,
    Nav,
    NotificationContainer,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss';
.container {
  padding: 50px 0;
}
</style>
