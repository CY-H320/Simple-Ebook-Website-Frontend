<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon spoon-sugar-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6 13H3V10H6V13M10 10H7V13H10V10M8 6H5V9H8V6M18 12C14.25 12 12.28 13.25 11 14H2C2 16.21 3.79 18 6 18H7C8 18 8.92 17.63 9.62 17C11.06 15.78 12.68 14.74 14.55 14.36C15.61 14.15 16.78 14 18 14H22V12H18Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SpoonSugarIcon",
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