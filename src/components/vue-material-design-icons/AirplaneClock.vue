<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon airplane-clock-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M16 9C15.09 9 14.23 9.18 13.43 9.5L12.73 6.45L16.62 2.56C17.2 2 17.2 1.03 16.62 .44S15.08-.146 14.5 .44L10.61 4.33L1.41 2.21L0 3.62L7.43 7.5L3.54 11.4L1.06 11.05L0 12.11L3.18 13.87L4.95 17.06L6 16L5.66 13.5L9.55 9.63L10.57 11.59C9.59 12.79 9 14.33 9 16C9 19.87 12.13 23 16 23S23 19.87 23 16 19.87 9 16 9M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25V12H15V17L18.61 19.16L19.36 17.94L16.5 16.25Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AirplaneClockIcon",
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