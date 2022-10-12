//json-server api 호출기
import EventService from '@/services/EventService';

/**
 * [sampling 다시 진행중]
 *
 */

export default {
  namespaced: true,
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    events: [],
    event: {},
    eventsTotal: 0,
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
    getEvents(state) {
      return state.events;
    },
    getEvent(state) {
      return state.event;
    },
    eventsTotal(state) {
      return state.eventsTotal;
    },
  },
  mutations: {
    /**
     * convention that is common for mutations. It’s entirely optional.
     * => mutation명은 대문자로 하는게 관례임. 선택사항
     * -> state의 변화를 더욱 명확하게 할 수 있어서 좋음
     */
    ADD_EVENT(state, event) {
      state.events.push(event);
    },

    // [단건 조회]
    SET_EVENT(state, event) {
      state.event = event;
    },

    // [다건 조회]
    SET_EVENTS(state, evnents) {
      state.events = evnents;
    },

    //[게시글 총 개수 ]
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal;
    },
  },

  /**
   * [Action을 사용하는 이유] -----------------------------------------------
   * An action allows us to program more nuanced behavior as it pertains to our app-wide state management.
   * For example, what if we needed to run some conditional logic,
   * or wait for an API call to return before we determine whether we should commit a mutation or not? We can encapsulate all of that behavior within an action.
   * action을  사용하여 앱 상태 관리를 더 뉘앙스 있게 관리할 수 있다.
   * 예를 들어, condition 로직이나, API를 기다려야 할때 돌연변이를 commit해야 한다면?
   * => 모든 행동을 캡슐화 할 수 있다.
   *
   * [Action]
   * actions are more like expressing an intent or desire for something to happen,
   * => for some change to be made to the state, depending upon some surrounding circumstances,
   *
   * [Mutation]
   *  mutation is the fulfillment of that intention.
   * ------------------------------------------------------------------------
   */

  /**
   * [ERROR HANDLING]--------------------------------------------------------
   * (1) 간단 버전
   * 1. action reponse 결과를 return
   * 2. error 인 경우, throw error
   * 3. throw error를 다시 vue isntance에서 catch해서 핸들링
   *
   * ------------------------------------------------------------------------
   */
  actions: {
    //[등록]
    createEvent({ commit, dispatch }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event);
          const notification = {
            type: 'success',
            message: 'Your event has been created!!!😎',
          };
          dispatch('notification/add', notification, { root: true });
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching events' + error.message,
          };
          dispatch('notification/add', notification, { root: true });
          throw error;
        });
    },

    //[다건 api 호출]
    fetchEvents({ commit, dispatch }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((result) => {
          console.log('fetch event', result);
          console.log('fetch event', result.headers['x-total-count']);
          commit('SET_EVENTS_TOTAL', parseInt(result.headers['x-total-count']));
          commit('SET_EVENTS', result.data);
        })
        .catch((error) => {
          // console.log('There was an error:', error.result);
          const notification = {
            type: 'error',
            message: 'There was a problem fetching events' + error.message,
          };
          dispatch('notification/add', notification, { root: true });
        });
    },

    //[단건 api 호출]
    fetchEvent({ commit, state, dispatch }, id) {
      //이미 리스트에 이벤트가 올라가있으면 그걸로 반환
      const existingEvent = state.events.find((event) => event.id === id);
      if (existingEvent) {
        commit('SET_EVENT', existingEvent);
        return existingEvent;
      } else {
        return EventService.getEvent(id)
          .then((result) => {
            console.log(result);
            commit('SET_EVENT', result.data);
          })
          .catch((error) => {
            const notification = {
              type: 'error',
              message: 'There was a problem fetching events' + error.message,
            };

            dispatch('notification/add', notification, { root: true });
            throw error;
          });
      }
    },
  },

  /**
   * [computed 하게 접근하는 이유]
   * - 왜 state말고, getters로 접근해야 하는가?
   * that is because computed properties allow us to retain the reactivity of the Vuex state.
   * In other words, if and when the global events in our Vuex state gets updated,
   * our local events computed property will recalculate
   * (because its dependency, the state, has changed).
   */
};
