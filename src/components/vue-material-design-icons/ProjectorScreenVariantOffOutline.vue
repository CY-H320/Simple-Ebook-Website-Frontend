<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon projector-screen-variant-off-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22.11 21.46L2.39 1.73L1.11 3L4.11 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H16.11L20.84 22.73L22.11 21.46M7 16V9H7.11L14.11 16H7M12.2 9L9.2 6H20C20.55 6 21 6.45 21 7V8C21 8.55 20.55 9 20 9H19V15.8L17 13.8V9H12.2Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ProjectorScreenVariantOffOutlineIcon",
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