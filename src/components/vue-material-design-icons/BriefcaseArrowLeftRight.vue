<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon briefcase-arrow-left-right-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M10 2H14C15.11 2 16 2.9 16 4V6H20C21.11 6 22 6.9 22 8V13.53C20.94 12.58 19.54 12 18 12C14.69 12 12 14.69 12 18C12 19.09 12.29 20.12 12.8 21H4C2.89 21 2 20.1 2 19V8C2 6.89 2.89 6 4 6H8V4C8 2.89 8.89 2 10 2M14 6V4H10V6H14M19 18.5V17H15V15H19V13.5L22 16L19 18.5M17 19H21V21H17V22.5L14 20L17 17.5V19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BriefcaseArrowLeftRightIcon",
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