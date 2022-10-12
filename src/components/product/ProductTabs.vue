<template>
  <div>
    <h2>ProductTab</h2>
    <span
      class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="$emit('update:selectedTab', tab)"
    >
      {{ tab }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    selectedTab: {
      type: String,
      default: 'Reviews',
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tab {
  cursor: pointer;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
}
.tabs {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  font-size: 22.5px;
  font-weight: bold;
  color: #16c0b0;
  text-decoration: underline;
}
</style>
