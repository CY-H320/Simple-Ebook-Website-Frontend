<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon raw-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6.5 9C7.3 9 8 9.7 8 10.5V11.5C8 12.1 7.6 12.6 7.1 12.9L8 15H6.5L5.6 13H4.5V15H3V9H6.5M6.5 11.5V10.5H4.5V11.5H6.5M10.25 9H12.75L14.25 15H12.75L12.38 13.5H10.63L10.25 15H8.75L10.25 9M11 12H12L11.75 11H11.25L11 12M20 9H21.5L20 15H18.5L17.74 11.96L17 15H15.5L14 9H15.5L16.24 12L17 9H18.5L19.24 12L20 9Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RawIcon",
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