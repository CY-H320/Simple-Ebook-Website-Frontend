<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon printer-pos-pause-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M17 9H7V4H17V9M20 13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19H4V12C4 10.9 4.89 10 6 10H18C19.11 10 20 10.9 20 12V13.09M10 12H6V14H10V12M16 22H18V16H16V22M20 16V22H22V16H20Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PrinterPosPauseIcon",
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