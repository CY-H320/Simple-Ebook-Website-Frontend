<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon signal-distance-variant-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4,6V4A12,12 0 0,1 16,16H14A10,10 0 0,0 4,6M4,10V8A8,8 0 0,1 12,16H10A6,6 0 0,0 4,10M4,12A4,4 0 0,1 8,16H4V12M3,18H19V16L22,19L19,22V20H3V18Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SignalDistanceVariantIcon",
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