<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon truck-plus-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.7 4.3 20 6 20S9 18.7 9 17H15C15 18.7 16.3 20 18 20S21 18.7 21 17H23V12L20 8M6 18.5C5.2 18.5 4.5 17.8 4.5 17S5.2 15.5 6 15.5 7.5 16.2 7.5 17 6.8 18.5 6 18.5M15 15H8.2C7.7 14.4 6.9 14 6 14S4.3 14.4 3.8 15H3V6H15V15M18 18.5C17.2 18.5 16.5 17.8 16.5 17S17.2 15.5 18 15.5 19.5 16.2 19.5 17 18.8 18.5 18 18.5M17 12V9.5H19.5L21.5 12H17M8 11H6V9H8V7H10V9H12V11H10V13H8V11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TruckPlusOutlineIcon",
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