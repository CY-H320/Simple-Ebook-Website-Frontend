<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon currency-inr-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M8,3H18L17,5H13.74C14.22,5.58 14.58,6.26 14.79,7H18L17,9H15C14.75,11.57 12.74,13.63 10.2,13.96V14H9.5L15.5,21H13L7,14V12H9.5V12C11.26,12 12.72,10.7 12.96,9H7L8,7H12.66C12.1,5.82 10.9,5 9.5,5H7L8,3Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyInrIcon",
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