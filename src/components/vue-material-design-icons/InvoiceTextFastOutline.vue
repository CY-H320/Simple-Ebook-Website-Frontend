<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon invoice-text-fast-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M18 9H11V11H18V9M11 13H16V15H11V13M22 21L19.5 19.32L17 21L14.5 19.32L12 21L9.5 19.32L7 21V5H22V21M20 16.57V7H9V16.57L12 18.59L14.5 16.9L17 18.59L20 16.57M3 7C2.4 7 2 7.4 2 8C2 8.6 2.4 9 3 9H5V7H3M2 11C1.4 11 1 11.4 1 12C1 12.6 1.4 13 2 13H5V11H2M1 15C.4 15 0 15.4 0 16C0 16.6 .4 17 1 17H5V15H1Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "InvoiceTextFastOutlineIcon",
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