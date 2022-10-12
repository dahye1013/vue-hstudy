<template>
  <div>
    <h1>Events for Good</h1>
    <div class="events">
      <!-- the component isn't reloading when we navigate
      1. watch the page computed property, and call fetchEvetn when it changes
      2. reload components when the url changes, including query parameters
      => app에 key값을 route 기준으로 설정해서 변화를 감지하도록 한다.
       -->
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <!-- 페이징 처리 버튼 -->
      <template v-if="page != 1">
        <router-link
          :to="{ name: 'eventList', query: { page: page - 1 } }"
          rel="prev"
        >
          Prev Page
        </router-link>
      </template>

      <template v-if="hasNextPage">
        <router-link
          :to="{ name: 'eventList', query: { page: page + 1 } }"
          rel="next"
        >
          Next
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EventCard from '@/components/EventCard.vue';
// import NProgress from 'nprogress';
// import store from '@/store';

export default {
  components: {
    EventCard,
  },

  /**
   * beforeEnter에서는 this에 접근 할 수없다.
   * => store에서 fetch해야함.
   */
  // beforeEnter(to, from, next) {
  // console.log('beforeEnter');
  // next();
  // from;
  // NProgress.start();
  // store
  //   .dispatch('event/fetchEvents')
  //   .then(() => {
  //     next();
  //     NProgress.done();
  //   })
  //   .catch((error) => {
  //     next({ name: 'errororDisplay', params: { error } });
  //     this.$router.push({
  //       name: 'errororDisplay',
  //       params: { error: error },
  //     });
  //   });
  // },

  data() {
    return {
      perPage: 3, // 페이지당 노출 개수
    };
  },

  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: this.perPage,
      page: this.page,
    });
  },

  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage() {
      return this.eventsTotal > this.page * this.perPage;
    },
    ...mapGetters('event', {
      events: 'getEvents',
      eventsTotal: 'eventsTotal',
    }),

    // ...mapGetters(['event/getEvents']),
    // events() {
    //   return this.$store.getters['event/getEvents'];
    // },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
