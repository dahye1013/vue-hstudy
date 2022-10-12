/**
 * [Loading Vuex module]
 *
 * API request Interceptor call
 *   => startLoading
 * API reponse Interceptor call
 *   => doneLoading
 *
 *
 * (startLoading)
 * 1. apiWatingCount === 0이면, 로딩 실행
 * 2. apiWatingCount + 1
 *
 * (doneLoading)
 * 1. apiWatingCount - 1
 * 2. apiWatingCount === 0 이면
 * - apiWatingCount -1 실행
 * -> Subtract 1 from apiWaitingCount
 * => add 1 to apiWaitingCount
 *
 * (apiWaitingCount)
 * - how many APIs calls are waiting
 *
 */
export default {};
