<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon invoice-fast-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22 5H7V21L9.5 19.32L12 21L14.5 19.32L17 21L19.5 19.32L22 21V5M2 8C2 7.4 2.4 7 3 7H5V9H3C2.4 9 2 8.6 2 8M1 12C1 11.4 1.4 11 2 11H5V13H2C1.4 13 1 12.6 1 12M0 16C0 15.4 .4 15 1 15H5V17H1C.4 17 0 16.6 0 16Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "InvoiceFastIcon",
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