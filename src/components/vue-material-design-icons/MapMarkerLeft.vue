<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon map-marker-left-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M15 11.5C13.62 11.5 12.5 10.38 12.5 9S13.62 6.5 15 6.5 17.5 7.62 17.5 9 16.38 11.5 15 11.5M8 9C8 14.25 15 22 15 22S22 14.25 22 9C22 5.13 18.87 2 15 2S8 5.13 8 9M6 7L1 12L6 17V7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MapMarkerLeftIcon",
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