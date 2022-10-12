<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    >
    </NotificationBar>
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue';
import { mapState } from 'vuex';
export default {
  components: {
    NotificationBar,
  },
  computed: {
    ...mapState('notification', ['notifications']),
  },
};
</script>

<style lang="scss" scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 20px;
}
.-text-success {
  background: #4caf50;
  color: white;
}
// .-text-primary {
//   color: #39b982;
// }
.-text-base {
  color: #000;
}
.-text-error {
  border: none;
  background: #f44336;
  color: white;
}
.-text-gray {
  color: rgba(0, 0, 0, 0.5);
}
</style>
