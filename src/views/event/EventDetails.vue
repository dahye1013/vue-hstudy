<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: ',',
    },
  },

  data() {
    return {};
  },

  computed: {
    event() {
      return this.$store.getters['event/getEvent'];
    },
  },

  created() {
    // this.$store.dispatch('event/fetchEvent', this.id);
    // this.$store.dispatch('event/fetchEvent', this.id);
  },
};
</script>
<style scoped>
.container {
  padding: 50px 0;
  margin: 0 auto;
  width: 500px;
  font-size: 20px;
}
</style>
