<template>
  <router-link
    class="event-link"
    :to="{ name: 'eventDetails', params: { id: event.id } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users"
        >{{ event.attendees ? event.attendees.length : 0 }} attending</BaseIcon
      >
    </div>
    <!-- <div class="event-card">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div> -->
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-link {
  font-size: 2rem;
}
.event-card {
  padding: 20px;
  width: 450px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 10px;
  margin-bottom: 18px;
  /* transition */
  transition: all 0.2s linear;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
