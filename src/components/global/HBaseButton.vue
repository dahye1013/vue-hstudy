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

    <button
      v-on="$listeners"
      v-bind="$attrs"
      :class="[buttonClass, 'button', `button-color-${color}`]"
    >
      <!-- dynamic하게 만들기 위해서 slot 사용 -->
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      required: false,
      default: 'blue',
    },
    buttonClass: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
$colors: white, primary, secondary, grey, blue, blue-dark, blue1, blue2, blue3;

//for문 돌려서 class 이름이랑 색상 맞춰서 할당...
//scss 문법을 좀 더 알아봐야할듯
//keyword - bug, append, ...
// @each $color in $colors {
//   .button-#{$color} {
//     background-color: $color-:
//   }
// }

$color-white: #fff;
$color-primary: #2e3d52;
$color-secondary: #25889c;
$color-grey-light: #b9b9b9;

$color-blue: #1e95ea;
$color-blue-dark: #3f4a56;
$color-blue-1: #a8d8ff;
$color-blue-2: #c1e1ff;
$color-blue-3: #d6eaff;

.container {
  display: inline-block;
}
.button {
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;

  margin: 3px;
  border: none;

  &:hover {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  // &-color-blue {
  //   background-color: $color-blue;
  // }
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
</style>
