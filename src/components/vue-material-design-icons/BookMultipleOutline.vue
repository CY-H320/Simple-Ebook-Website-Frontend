<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon book-multiple-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 2A2 2 0 0 1 21 4V16A2 2 0 0 1 19 18H9A2 2 0 0 1 7 16V4A2 2 0 0 1 9 2H19M19 4H16V10L13.5 7.75L11 10V4H9V16H19M3 20A2 2 0 0 0 5 22H17V20H5V6H3Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookMultipleOutlineIcon",
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