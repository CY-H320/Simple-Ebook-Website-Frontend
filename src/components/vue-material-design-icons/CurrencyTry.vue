<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon currency-try-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M9 8.76V3H11V7.5L15 5V7.36L11 9.87L11 12.22L15 9.72V12.08L11 14.59V19C13.76 19 16 16.76 16 14H18C18 17.87 14.87 21 11 21H9V15.84L6 17.72V15.36L9 13.5V11.12L6 13V10.64L9 8.76Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyTryIcon",
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