import axios from 'axios';

/**
 * [description]
 * 1. npm install -g json -server
 * 2. json-server -d 1500 db.json
 * => 실행 delay 일부러 1.5초 주어서 프로그래스바 샘플링 확인
 *
 * db.json에 있는 mock db를 사용해서 진행 .
 */

/**
 * [JOSN SERVER]-----------------------------------------------
 * ref : https://my-json-server.typicode.com/
 * - 목업 데이터 베이스
 * - web version of this helpful library
 * - Changes are faked and aren’t persisted
 *   => won’t actually be added to our db.json file
 *
 * (locally running version of JSON Serve)
 * ref : https://www.npmjs.com/package/json-server
 *
 * (전역설치 방법)
 * npm install -g json-server
 *
 * (package.json)
 * serve script에 db.json 를 watch 할거라고 추가해야함.
 * json-server --watch db.json
 * --------------------------------------------------------------
 *
 */
/**
 * [TODO] 2021-09-01
 * devServer 살펴볼것
 * -> webpack 설정을 통해서 서버 올리기
 * : 지금 노드 따로 실행하는거 수정
 */

/**
 * [Single Axios]
 */
const apiClient = axios.create({
  baseURL: 'http://localhost:3000', //local json server 주소
  // baseURL: 'http://localhost:3200', //local json server 주소
  withCredentials: false, //Access-Control-Allow-Credentials
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  //api 호출이 10초 이상 걸리면 throw error
  timeout: 10000,
});

/**
 * [axios intercepter] ---------------------------------------------
 * ref: https://axios-http.com/docs/interceptors
 *
 * -> nprogress  프로그래스바 라이브러리 사용 샘플링
 */
// import NProgress from 'nprogress';

// //[request interceptors] - request 시작시에 프로그래스 바 실행
// apiClient.interceptors.request.use((config) => {
//   NProgress.start();
//   return config;
// });

// //[response interceptors] - reponse 되면 프로그래스 바 완료
// apiClient.interceptors.response.use((config) => {
//   NProgress.done();
//   return config;
// });

/**
 * [Reason to user Interceptor]
 * 1. On request to set authorization tokens
 * 2. On response to format or filter data before it reaches into your app.
 * 3. On response to catch 401 not authroized response
 * => 보통 security 걸때 많이 사용한다.
 */

/**
 * [취약점]
 *
 * 1. Not Optinal for multiple api calls at the same time.
 * 여러 api가 동시에 호출 되었을때는 핸들링하기 어렵다.
 * -> vux module을 통해서 해결 할 수 있다.
 * loading.js 참고 << 샘플링을 아직 못했고 설명만 써둠
 *
 * 2. templates get loaded before API call is returned
 * - api가 호출되기 전에 화면 이동함.
 *
 */

//------------------------------------------------------------------

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page);
  },
  getEvent(id) {
    return apiClient.get('/events/' + id);
  },
  postEvent(event) {
    return apiClient.post('/events', event);
  },
};
