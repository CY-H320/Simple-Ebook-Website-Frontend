<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon music-rest-sixteenth-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M15 3A5.56 5.56 0 0 1 11.95 4.86A1.5 1.5 0 1 0 10.5 6H10.74A6.32 6.32 0 0 0 14.25 4.93L12.9 9.1A5.56 5.56 0 0 1 9.95 10.86A1.5 1.5 0 1 0 8.5 12H8.74A6.32 6.32 0 0 0 12.25 10.93L9 21H11L17 3Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MusicRestSixteenthIcon",
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