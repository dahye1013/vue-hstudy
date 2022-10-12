import axios from 'axios';
export default {
  state: {
    loadingStatus: 'loading',
    todos: [],
  },
  getters: {},
  actions: {
    fetchTodos(context) {
      context.commit('SET_LOADING_STATUS', 'loading');

      axios.get('api/todos').then((result) => {
        context.commit('SET_LOADING_STATUS', 'notLoading');
        context.commit('SET_TODOS', result.data.todos);
      });
    },
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
};
