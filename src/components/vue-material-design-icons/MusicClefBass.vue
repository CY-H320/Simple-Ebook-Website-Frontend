<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon music-clef-bass-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M18.5 5A1.5 1.5 0 1 1 17 6.5A1.5 1.5 0 0 1 18.5 5M18.5 11A1.5 1.5 0 1 1 17 12.5A1.5 1.5 0 0 1 18.5 11M10 4A5 5 0 0 0 5 9V10A2 2 0 1 0 7.18 8A3 3 0 0 1 10 6A4 4 0 0 1 14 10C14 13.59 11.77 16.19 7 18.2L7.76 20.04C13.31 17.72 16 14.43 16 10A6 6 0 0 0 10 4Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MusicClefBassIcon",
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