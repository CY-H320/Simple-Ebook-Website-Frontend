<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon wardrobe-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6 2C4.89 2 4 2.9 4 4V19C4 20.11 4.89 21 6 21V22H8V21H16V22H18V21C19.11 21 20 20.11 20 19V4C20 2.9 19.11 2 18 2H6M6 4H11V19H6V4M13 4H18V19H13V4M8 10V13H10V10H8M14 10V13H16V10H14Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WardrobeOutlineIcon",
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