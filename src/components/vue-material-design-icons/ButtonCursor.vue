<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon button-cursor-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M18.1 15.3C18 15.4 17.8 15.5 17.7 15.6L15.3 16L17 19.6C17.2 20 17 20.4 16.6 20.6L13.8 21.9C13.7 22 13.6 22 13.5 22C13.2 22 12.9 21.8 12.8 21.6L11.2 18L9.3 19.5C9.2 19.6 9 19.7 8.8 19.7C8.4 19.7 8 19.4 8 18.9V7.5C8 7 8.3 6.7 8.8 6.7C9 6.7 9.2 6.8 9.3 6.9L18 14.3C18.3 14.5 18.4 15 18.1 15.3M6 12H4V4H20V12H18.4L20.6 13.9C21.4 13.6 21.9 12.9 21.9 12V4C21.9 2.9 21 2 19.9 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H6V12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ButtonCursorIcon",
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