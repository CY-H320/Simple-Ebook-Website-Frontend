<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon currency-rupee-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M13.66 7C13.1 5.82 11.9 5 10.5 5H6V3H18V5H14.74C15.22 5.58 15.58 6.26 15.79 7H18V9H16C15.73 11.8 13.37 14 10.5 14H9.77L16.5 21H13.73L7 14V12H10.5C12.26 12 13.72 10.7 13.96 9H6V7H13.66Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyRupeeIcon",
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