<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon format-text-rotation-angle-up-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20.58 9.33V13.55L19.17 12.14L10.31 21L8.91 19.59L17.72 10.73L16.31 9.33M7.59 11L10.22 8.39L5.34 6.14M4.5 4.22L15.61 8.63L14.16 10.13L11.96 9.19L8.39 12.75L9.33 14.91L7.83 16.41L3.42 5.25Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatTextRotationAngleUpIcon",
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