<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon archive-off-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M8.2 5L6.2 3H21V9H12.2L10.2 7H19V5H8.2M20 16.8V10H18V14.8L20 16.8M20 19.35V19.34L18 17.34V17.35L9.66 9H9.66L7.66 7H7.66L6.13 5.47L2.39 1.73L1.11 3L3 4.89V9H7.11L17.11 19H6V10H4V21H19.11L20.84 22.73L22.11 21.46L20 19.35Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArchiveOffOutlineIcon",
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