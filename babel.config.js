/**https://cli.vuejs.org/guide/browser-compatibility.html#usebuiltins-usage
 *
 * [필요한 폴리필을 명시적으로 나열하는 경우]
 * - babel.config.js 의 presets에서 선언적으로 사용한다.
 * - @vue/cli-plugin-babel/preset에는 하단 폴리필이 기본적으로 포함 되어있다.
 *   ['es.array.iterator', 'es.promise', 'es.object.assign', 'es.promise.finally']
 *
 * 소스 코드에서 폴리필을 직접 가져오는 방식보다 이러한 방식이 추천된다.
 * => browserlist 대상이 아닌 경우, 자동으로 제외 시킬 수 있다.
 */

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
};
