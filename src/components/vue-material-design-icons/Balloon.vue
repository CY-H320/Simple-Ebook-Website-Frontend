<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon balloon-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M13.16,12.74L14,14H12.5C12.35,16.71 12,19.41 11.5,22.08L10.5,21.92C11,19.3 11.34,16.66 11.5,14H10L10.84,12.74C8.64,11.79 7,8.36 7,6A5,5 0 0,1 12,1A5,5 0 0,1 17,6C17,8.36 15.36,11.79 13.16,12.74Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BalloonIcon",
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