<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon file-star-four-points-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4 4C4 2.89 4.89 2 6 2H14L20 8V20C20 20.53 19.79 21.04 19.41 21.41C19.04 21.79 18.53 22 18 22H6C5.47 22 4.96 21.79 4.59 21.41C4.21 21.04 4 20.53 4 20V4M13 3.5V9H18.5L13 3.5M12 11L10.74 13.75L8 15L10.74 16.26L12 19L13.25 16.26L16 15L13.25 13.75L12 11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileStarFourPointsIcon",
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