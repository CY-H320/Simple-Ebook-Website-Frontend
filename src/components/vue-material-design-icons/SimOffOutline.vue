<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon sim-off-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22.11 21.46L2.39 1.73L1.11 3L5.06 6.95L4 8V20C4 21.11 4.89 22 6 22H18C18.58 22 19.1 21.75 19.46 21.35L20.84 22.73L22.11 21.46M18 20H6V8.83L6.47 8.36L18 19.89V20M10.83 4H18V14.8L20 16.8V4C20 2.9 19.11 2 18 2H10L7.6 4.4L9 5.81L10.83 4Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SimOffOutlineIcon",
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