import EventList from '@/views/event/EventList.vue';
import EventDetails from '@/views/event/EventDetails.vue';
// import EventCreate1 from '@/views/event/EventCreate1.vue';
import EventCreate2 from '@/views/event/EventCreate2.vue';
import store from '@/store';

export default [
  {
    path: '/event/list',
    name: 'eventList',
    component: EventList,
    beforeEnter(to, from, next) {
      console.log('beforeEnter list!!💨');
      next();
    },
  },
  {
    path: '/event/:id',
    name: 'eventDetails',
    props: true,
    component: EventDetails,
    /**
     * beforeEnter는 this에 접근 할 수 없다.
     * => store에서 fetch해야함.
     */
    beforeEnter(to, from, next) {
      console.log('before enter info!!!💨');
      store
        .dispatch('event/fetchEvent', to.params.id)
        // .dispatch('event/fetchEvent', to.params.id)
        .then((event) => {
          to.params.event = event;
          next();
        })
        .catch((error) => {
          //1. error에 대한 응답이 오거나, status가 404인 경우
          if (error.response && error.reponse.status === 404) {
            next({ name: '404', params: { resource: 'event' } });
          }
          //2. 그 외의 경우
          else next({ name: 'networkIssue' });
        });
    },
  },
  {
    path: '/event/create',
    name: 'eventCreate',
    component: EventCreate2,
    // component: EventCreate1,
  },
];
