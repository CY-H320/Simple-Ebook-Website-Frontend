<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon invoice-clock-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M15 16.69V13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69M10.87 20.76L9 22L6 20L3 22V3H21V11.1C22.24 12.36 23 14.09 23 16C23 19.87 19.87 23 16 23C13.97 23 12.14 22.14 10.87 20.76M9.73 19.11C9.26 18.17 9 17.12 9 16C9 12.13 12.13 9 16 9C17.07 9 18.09 9.24 19 9.67V5H5V18.26L6 17.6L9 19.6L9.73 19.11M16 21C18.76 21 21 18.76 21 16C21 13.24 18.76 11 16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "InvoiceClockOutlineIcon",
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