<template>
  <div class="day-event" :style="getEventBgColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons edit-hover">
        <i
          class="fa fa-pencil-square edit-icon"
          @click="editEvent(day.id, event.details)"
        ></i>
        <i class="fa fa-trash-o delete-icon"></i>
      </div>
    </div>

    <div v-if="event.edit">
      <input
        v-model="newEditedDetails"
        type="text"
        @keyup.enter="submitEditEvent(day.id, event.details, newEditedDetails)"
      />
      <div class="has-text-centered icons">
        <i
          class="fa fa-check"
          @click="submitEditEvent(day.id, event.details, newEditedDetails)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store';
  export default {
    name: 'CalendarEvent',
    props: {
      event: {
        type: Object,
        required: true,
      },
      day: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        newEditedDetails: this.event.details,
      };
    },
    computed: {
      getEventBgColor() {
        // eslint-disable-next-line prettier/prettier
        const colors = [
          '#1abc9c',
          '#3498db',
          '#e74c3c',
          '#9b59b6',
          '#f1c40f',
          '#2ecc71',
          '#d35400',
          '#8e44ad',
          '#f39c12',
          '#2980b9',
          '#2c3e50',
          '#16a085',
          '#16a085',
          '#27ae60',
          '#95a5a6',
          '#7f8c8d',
        ];

        let randomNum = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomNum];
        return `background-color: ${randomColor}`;
      },
    },
    methods: {
      editEvent(dayId, eventDetails) {
        store.editEvent(dayId, eventDetails);
      },

      submitEditEvent(dayId, oldEventDetails, newEditedDetails) {
        store.updateEvent(dayId, oldEventDetails, newEditedDetails);
      },

      deleteEvent(dayId, eventDetails) {
        store.deleteEvent(dayId, eventDetails);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .day-event {
    margin-top: 6px;
    margin-bottom: 6px;
    display: block;
    color: #ffffff;
    font-weight: 400;
    padding: 5px;

    .details {
      display: block;
    }

    ::placeholder {
      color: #ffffff;
    }

    // :hover {
    //   background-color: darken(red, 3%);
    // }

    .edit-hover i {
      visibility: hidden;
    }

    .edit-hover:hover i {
      visibility: visible;
    }

    .icons .fa {
      padding: 5px;
      font-size: 1.3em;
    }

    input {
      background: none;
      border: 0;
      border-bottom: 1px solid #fff;
      width: 100%;
      color: #ffffff;
      padding-left: 1em;

      &:focus {
        outline: none;
      }
    }
  }
</style>
