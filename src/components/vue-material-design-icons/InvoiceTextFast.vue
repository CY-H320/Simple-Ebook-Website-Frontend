<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon invoice-text-fast-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M7 5H22V21L19.5 19.32L17 21L14.5 19.32L12 21L9.5 19.32L7 21V5M18 9H11V11H18V9M11 13V15H16V13H11M3 7C2.4 7 2 7.4 2 8C2 8.6 2.4 9 3 9H5V7H3M1 12C1 11.4 1.4 11 2 11H5V13H2C1.4 13 1 12.6 1 12M1 15C.4 15 0 15.4 0 16C0 16.6 .4 17 1 17H5V15H1Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "InvoiceTextFastIcon",
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