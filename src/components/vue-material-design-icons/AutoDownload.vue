<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon auto-download-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22 17V19H11V17H22M19 4.5V9.5H22L16.5 15L11 9.5H14V4.5H19M10.7 15H8.8L8.1 13H4.9L4.2 15H2.3L5.5 6H7.5L10.7 15M7.65 11.65L6.5 8L5.35 11.65H7.65Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AutoDownloadIcon",
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