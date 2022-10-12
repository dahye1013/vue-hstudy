<template>
  <div>
    <label v-if="label">{{ label }}</label>

    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
    <!-- --- syntax sugar version ------>
    <!-- <input
      type="text"
      :placeholder="placeholder"
      @input="updateValue"
      v-bind="$attrs"
    /> -->
  </div>
</template>

<script>
/**
 * [Input Component description]
 * - 존재하는 value를 pass해서 v-model 건다.
 *
 * - 다음에 해당하는 sytax sugar임
 * :value="event.title"
 * @input="(value) => { event.title = value }"
 *
 *
 */
export default {
  /**
   * [inheritAttrs]
   * ref: https://vuejs.org/v2/api/
   *
   * - arrtibute는 기본적으로 root element 기준으로 inherited되고 있다.
   * -> 해당 컴포넌트에서는 div에 부여된다.
   *
   * 즉, class나 placeholder를 props 받아도 div에 적용됨.
   *
   * => inheritAttrs : false 적용하면, 원하는 element 기준으로 부여 가능하다.
   *
   */
  inheritAttrs: false,
  props: {
    //value를 받아서 input에 바인딩
    value: [String, Number],
    label: {
      type: String,
      default: '',
      required: false,
    },
    placeholder: {
      type: String,
      default: '',
      required: false,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 24px;
}

input[type='text'] {
  padding: 0px 10px;
}

input:focus {
  border-color: #16c0b0;
  outline: 0;
}
</style>
