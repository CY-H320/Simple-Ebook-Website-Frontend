<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon seat-legroom-normal-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5,12V3H3V12A5,5 0 0,0 8,17H14V15H8A3,3 0 0,1 5,12M20.5,18H19V11A2,2 0 0,0 17,9H12V3H6V11A3,3 0 0,0 9,14H16V21H20.5A1.5,1.5 0 0,0 22,19.5A1.5,1.5 0 0,0 20.5,18Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SeatLegroomNormalIcon",
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