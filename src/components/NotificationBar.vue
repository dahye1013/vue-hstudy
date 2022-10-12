<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <span class="close-btn" @click="remove(notification)"></span>
    <p>
      {{ notification.message }}
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  mounted() {
    //5초뒤에 notification 삭제
    this.timeout = setTimeout(() => {
      this.remove(this.notification);
    }, 5000);
  },
  beforeDestroy() {
    /***
     * timeout을 삭제함으로서 setTimeout이 자동으로 삭제되지 않았을때 메모리를 잡아먹는 것을 방지한다
     * ex) 버튼으로 5초가 되기 전에 삭제
     * https://medium.com/outsystems-experts/beyond-memory-leaks-in-javascript-d27fd48ae67e
     */
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    },
  },
  methods: mapActions('notification', ['remove']),
  //   methods: { ...mapActions('notification', ['remove']) },
};
</script>

<style lang="scss" scoped>
.notification-bar {
  position: relative;
  margin: 1em 0 1em;
  padding: 30px;
  // padding: 10px 25px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 10px;
  margin-bottom: 18px;
  //   ::before {
  //     padding-right: 10px;
  //     content: 'X';
  //     color: black;
  //   }
  display: flex;
  align-items: center;
  height: 3rem;
  strong {
    color: black;
  }
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 5px;
  &::before {
    content: 'X';
  }
}
</style>
