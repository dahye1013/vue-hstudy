<template>
  <div>
    <h1>Create an event</h1>

    <div class="form-container">
      <form @submit.prevent="onSubmit">
        <h-select
          label="Select a category"
          :options="categories"
          v-model="event.category"
        />

        <h3>Name & describe your event</h3>

        <h-input
          label="Title"
          placeholder="Title"
          v-model="event.title"
        ></h-input>

        <h-input
          label="Description"
          placeholder="Description"
          v-model="event.description"
        ></h-input>

        <h3>Where is your event?</h3>

        <h-input
          label="Location"
          placeholder="Location"
          v-model="event.location"
        ></h-input>

        <h3>When is your event?</h3>
        <h-input label="Date" placeholder="Date" v-model="event.date"></h-input>

        <h-input label="Time" placeholder="Time" v-model="event.time"></h-input>
        <h-custom-button type="submit" buttonClass="-fill-gradient"
          >Submit</h-custom-button
        >

        <!-- <h-button buttonClass="-fill-gray">Submit</h-button> -->
        <!-- <button type="submit">Submit</button> -->
      </form>
    </div>
  </div>
</template>

<script>
/**
 * [uuidv4]
 * unique한 id를 생성해주는 라이브러리
 *
 * [date]
 */
import { mapState } from 'vuex';

import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      event: this.createFreshEventObject(),
    };
  },
  computed: {
    ...mapState('event', ['user', 'categories']),
  },

  methods: {
    //clear out event data
    //초기값 설정과 동시에 clear에 사용한다.
    createFreshEventObject() {
      const user = this.$store.state.user;
      const id = Math.floor(Math.random() * 10000000);
      return {
        user,
        id,
        category: '',
        title: '',
        descriptions: '',
        location: '',
        date: '',
        time: '',
        attendees: [],
      };
    },
    //[등록]
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.$store.state.user,
      };
      this.$store
        .dispatch('event/createEvent', event)
        .then(() => {
          this.$router.push({
            name: 'eventDetails',
            params: { id: event.id },
          });
          this.event = this.createFreshEventObject();
        })
        .catch((error) => {
          console.log(error);
          //   this.$router.push({
          //     name: 'errororDisplay',
          //     params: { error: error },
          //   });
        });
      // code omitted
    },
  },

  //[페이지 떠나기 전에 ask]
  // beforeRouteLeave(routeTo, routeFrom, next) {
  //   const answer = window.confirm(
  //     'Do you really want to leave? You have unsaved data.',
  //   );
  //   if (answer) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // },
};
</script>
