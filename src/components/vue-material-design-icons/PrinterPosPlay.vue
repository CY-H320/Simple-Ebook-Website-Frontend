<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon printer-pos-play-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 13.09V12C20 10.9 19.11 10 18 10H6C4.89 10 4 10.9 4 12V19H13C13 15.69 15.69 13 19 13C19.34 13 19.67 13.04 20 13.09M10 14H6V12H10V14M17 9H7V4H17V9M22 19L17 22V16L22 19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PrinterPosPlayIcon",
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