<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon seat-legroom-reduced-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19.97,19.2C20.15,20.16 19.42,21 18.5,21H14V18L15,14H9A3,3 0 0,1 6,11V3H12V9H17A2,2 0 0,1 19,11L17,18H18.44C19.17,18 19.83,18.5 19.97,19.2M5,12V3H3V12A5,5 0 0,0 8,17H12V15H8A3,3 0 0,1 5,12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SeatLegroomReducedIcon",
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