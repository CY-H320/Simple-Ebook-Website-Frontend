<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon razor-single-edge-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22 5V8H2V5H22M22 13V18H2V13H3.5C4.33 13 5 12.33 5 11.5S4.33 10 3.5 10L2 10V9H22V10H20.5C19.67 10 19 10.67 19 11.5S19.67 13 20.5 13H22M13 11C13 10.45 12.55 10 12 10S11 10.45 11 11V13C11 13.55 11.45 14 12 14S13 13.55 13 13V11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RazorSingleEdgeIcon",
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