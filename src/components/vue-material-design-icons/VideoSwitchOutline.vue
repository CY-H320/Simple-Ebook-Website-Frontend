<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon video-switch-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M8 13H12V15L15 12L12 9V11H8V9L5 12L8 15V13M18 9.5V6C18 5.4 17.5 5 17 5H3C2.5 5 2 5.4 2 6V18C2 18.5 2.5 19 3 19H17C17.5 19 18 18.5 18 18V14.5L22 18.5V5.5L18 9.5M16 17H4V7H16V17Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VideoSwitchOutlineIcon",
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