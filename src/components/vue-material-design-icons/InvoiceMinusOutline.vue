<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon invoice-minus-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 13.34C20.37 13.12 19.7 13 19 13V5H5V18.26L6 17.6L9 19.6L12 17.6L13.04 18.29C13 18.5 13 18.76 13 19C13 19.65 13.1 20.28 13.3 20.86L12 20L9 22L6 20L3 22V3H21V13.34M15 18V20H23V18H15Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "InvoiceMinusOutlineIcon",
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