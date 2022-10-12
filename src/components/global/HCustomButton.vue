<template>
  <div class="container">
    <!-- 
          [커스텀 이벤트]
          - 루트 엘리먼트의 네이티브 이벤트를 직접 감지
          -  Vue는 컴포넌트에서 사용된 리스너를 포함하는 오브젝트인 $listeners 속성을 제공
          -  v-on=$listeners를 이용해 부모 엘리먼트가 가진 이벤트 리스너를 특정 자식 엘리먼트에게 전달
          ref: https://kr.vuejs.org/v2/guide/components-custom-events.html

          (참고)
          - vue3에서는 사라지고 $attrs와 통합됨....💦
          ref: https://v3.ko.vuejs.org/guide/migration/listeners-removed.html#_2-x-%E1%84%86%E1%85%AE%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8

       -->

    <button v-on="$listeners" v-bind="$attrs" :class="[buttonClass, 'button']">
      <!-- dynamic하게 만들기 위해서 slot 사용 -->
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
  &:hover {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: none;
  }
  &:focus {
    outline: 0;
  }
}

.button:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
  background: #eeeeee;
}
.button + .button {
  margin-left: 1em;
}

/* 색상 ****************************************************************/
.-fill-gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
}
.-fill-gray {
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.-size-small {
  height: 32px;
}
/* 정렬 ****************************************************************/

.-icon-right {
  text-align: left;
  padding: 0 20px;
}
.-icon-right > .icon {
  margin-left: 10px;
}
.-icon-left {
  text-align: right;
  padding: 0 20px;
}
.-icon-left > .icon {
  margin-right: 10px;
}
.-icon-center {
  padding: 0 20px;
}
</style>
