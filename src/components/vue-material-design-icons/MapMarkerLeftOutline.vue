<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon map-marker-left-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M15 6.5C16.38 6.5 17.5 7.62 17.5 9S16.38 11.5 15 11.5 12.5 10.38 12.5 9 13.62 6.5 15 6.5M15 2C18.87 2 22 5.13 22 9C22 14.25 15 22 15 22S8 14.25 8 9C8 5.13 11.13 2 15 2M10 9C10 10 10 12 15 18.71C20 12 20 10 20 9C20 6.24 17.76 4 15 4S10 6.24 10 9M6 7L1 12L6 17V7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MapMarkerLeftOutlineIcon",
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