<template>
  <div class="day-event" :style="getEventBgColor">
    <div>
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fa fa-pencil-square edit-icon"></i>
        <i class="fa fa-trash-o delete-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEvent",
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
  computed: {
    getEventBgColor() {
      const colors = [
        "#1abc9c",
        "#3498db",
        "#e74c3c",
        "#9b59b6",
        "#f1c40f",
        "#2ecc71",
        "#d35400",
        "#8e44ad",
        "#f39c12",
        "#2980b9",
        "#2c3e50",
        "#16a085",
        "#16a085",
        "#27ae60",
        "#95a5a6",
        "#7f8c8d",
      ];
      let randomNum = Math.floor(Math.random() * colors.length);
      let randomColor = colors[randomNum];
      return `background-color: ${randomColor}`;
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

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>
