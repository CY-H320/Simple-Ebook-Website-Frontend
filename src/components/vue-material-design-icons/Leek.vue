<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon leek-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M10 2V5.55L12 7.55L14 5.55V2H10M6.34 4L3.87 6.5L15 17.62V12.67L6.34 4M17.66 4L13.06 8.61L15.54 11.09L20.13 6.5L17.66 4M9 13.74V20A2 2 0 0 0 11 22H13A2 2 0 0 0 15 20V19.74L13 17.74V20H11V15.74L9 13.74Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LeekIcon",
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