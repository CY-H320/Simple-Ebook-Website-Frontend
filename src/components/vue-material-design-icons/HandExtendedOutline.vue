<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon hand-extended-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22 15V16L14 18.5L7 16.6V18H1V7H9L15.2 9.3C16.2 9.7 17 10.8 17 12H19C20.7 12 22 13.3 22 15M5 16V9H3V16H5M19.9 14.6C19.7 14.2 19.4 14 19 14H13.6C13.1 14 12.5 13.9 12 13.8L9.7 13L10.3 11.1L12.7 11.9C13 11.9 15 12 15 12C15 11.6 14.8 11.3 14.4 11.2L8.6 9H7V14.5L14 16.4L19.9 14.6Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HandExtendedOutlineIcon",
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