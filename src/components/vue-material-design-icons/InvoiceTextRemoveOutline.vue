<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon invoice-text-remove-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 20L13.3 20.86C13.1 20.28 13 19.65 13 19C13 18.76 13 18.5 13.04 18.29L12 17.6L9 19.6L6 17.6L5 18.26V5H19V13C19.7 13 20.37 13.12 21 13.34V3H3V22L6 20L9 22L12 20M17 9V7H7V9H17M15 13V11H7V13H15M19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5L19 17.6Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "InvoiceTextRemoveOutlineIcon",
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