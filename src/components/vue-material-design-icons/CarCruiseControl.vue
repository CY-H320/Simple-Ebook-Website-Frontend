<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon car-cruise-control-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22,15C22,17.6 20.8,19.9 18.9,21.3L18.4,20.8L16.3,18.7L17.7,17.3L18.9,18.5C19.4,17.8 19.8,16.9 19.9,16H18V14H19.9C19.7,13.1 19.4,12.3 18.9,11.5L17.7,12.7L16.3,11.3L17.5,10.1C16.8,9.6 15.9,9.2 15,9.1V11H13V9.1C12.1,9.3 11.3,9.6 10.5,10.1L13.5,13.1C13.7,13.1 13.8,13 14,13A2,2 0 0,1 16,15A2,2 0 0,1 14,17A2,2 0 0,1 12,15C12,14.8 12,14.7 12.1,14.5L9.1,11.5C8.6,12.2 8.2,13.1 8.1,14H10V16H8.1C8.3,16.9 8.6,17.7 9.1,18.5L10.3,17.3L11.7,18.7L9.1,21.3C7.2,19.9 6,17.6 6,15A8,8 0 0,1 14,7A8,8 0 0,1 22,15M6.7,5.3L3.4,2L2,3.4L5.3,6.7L4,8H8V4L6.7,5.3Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CarCruiseControlIcon",
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