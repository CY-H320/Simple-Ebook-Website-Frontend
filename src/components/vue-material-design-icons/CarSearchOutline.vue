<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon car-search-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M10.29 19H6V20C6 20.5 5.6 21 5 21H4C3.5 21 3 20.5 3 20V12L5.1 6C5.3 5.4 5.8 5 6.5 5H17.5C18.1 5 18.7 5.4 18.9 6L20.91 11.74C20.17 10.93 19.24 10.31 18.18 9.95L17.1 7H6.8L5.8 10H13.91C12.79 10.4 11.81 11.1 11.08 12H5V17H9.68C9.78 17.71 10 18.38 10.29 19M6 14.5C6 15.3 6.7 16 7.5 16S9 15.3 9 14.5 8.3 13 7.5 13 6 13.7 6 14.5M16.11 11.61C13.61 11.61 11.61 13.61 11.61 16.11S13.61 20.61 16.11 20.61C17 20.61 17.8 20.36 18.5 19.93L21.61 23L23 21.61L19.92 18.5C20.36 17.82 20.61 17 20.61 16.11C20.61 13.61 18.61 11.61 16.11 11.61M16.11 13.61C17.5 13.61 18.61 14.73 18.61 16.11S17.5 18.61 16.11 18.61 13.61 17.5 13.61 16.11 14.73 13.61 16.11 13.61">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CarSearchOutlineIcon",
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