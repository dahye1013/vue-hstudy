import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from './App.vue';
import router from './router';
import store from './store';
import 'nprogress/nprogress.css'; // nprogress library

//[전역 컴포넌트]-----------------------------------------
/**
 * [Base Compnent 목적]
 * -  consistent behavior and design
 *
 * [automatic register]
 * 1. require을 통해서 해당 경로에 있는 컴포넌트 가져옴
 * 2. loadash를 사용해서 카멜 표기법으로 등록하여 사용 중
 *   => TODO - 나중에 정규식 사용하여 카멜표기법으로 이름 컨버팅하고,lodash 라이브러리 제거할것.
 */

/**
 * require() is on-demand loading.
 * Once a module has been loaded it won't be reloaded if the require() call is run again.
 * => 그럼 nuxt도 이거쓰나??
 */
const hComponent = require.context(
  './components/global',
  false,
  /H[A-Z]\w+\.(vue|js)$/,
);

hComponent.keys().forEach((fileName) => {
  const componentConfig = hComponent(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

/**
 * [Icon component]
 * BaseIcon - asset에 넣어서 사용
 * FeatherIcon - feather 라이브러리 사용
 */

import BaseIcon from '@/components/BaseIcon';
import FeatherIcon from '@/components/FeatherIcon';

/**
 * [컴포넌트 instance]
 * Vue.component('컴포넌트명',{옵션})
 * - component template sholud contain exactly one root element.
 *
 * (data)
 * -shoulb be function
 *    => return a fresh data object for each component
 *
 * (props)
 * - a custom attribute for passing data into out component
 *
 *
 *
 */

Vue.component('BaseIcon', BaseIcon);
Vue.component('FeatherIcon', FeatherIcon);

// import HSpinner from '@/components/global/HSpinner.vue';
// import HInput from '@/components/global/HInput.vue';
// import HSelect from '@/components/global/HSelect.vue';
// import HButton from '@/components/global/HButton.vue';
// Vue.component('h-spinner', HSpinner);
// Vue.component('h-input', HInput);
// Vue.component('h-select', HSelect);
// Vue.component('h-button', HButton);

//--------------------------------------------------------

//[전역 필터링]--------------------------------------------
/**
 * [filters]
 * - computed와 달리 인자를 받을 수 있다는 장정이 있다.
 * - methods와 filters는 computed보다 좀 더 유연하게 사용 가능함.
 * - chianning도 가능하다.
 */

import { currency } from '@/filter/currency';
import { upperCase, lowerCase, attending, length } from '@/filter/text';
Vue.filter('currency', currency);
Vue.filter('upperCase', upperCase);
Vue.filter('lowerCase', lowerCase);
Vue.filter('attending', attending);
Vue.filter('length', length);
//--------------------------------------------------------

//[config] - 배포시 false 해야함
Vue.config.productionTip = true;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
