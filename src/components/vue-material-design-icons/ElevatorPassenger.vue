<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon elevator-passenger-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M8.5 6C9.19 6 9.75 6.56 9.75 7.25S9.19 8.5 8.5 8.5 7.25 7.94 7.25 7.25 7.81 6 8.5 6M11 14H10V18H7V14H6V11.5C6 10.4 6.9 9.5 8 9.5H9C10.1 9.5 11 10.4 11 11.5V14M15.5 17L13 13H18L15.5 17M13 11L15.5 7L18 11H13Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ElevatorPassengerIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}
</script>