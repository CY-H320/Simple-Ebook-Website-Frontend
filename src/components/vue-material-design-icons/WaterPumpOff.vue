<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon water-pump-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5.7 2.5A2 2 0 0 1 7 2H9A2 2 0 0 1 11 4V5H19A2 2 0 0 1 21 7V11A1 1 0 0 1 21 13H17A1 1 0 0 1 17 11V9H12.2M20.84 22.73L22.11 21.46L11 10.34L2.39 1.73L1.11 3L3.65 5.54A2 2 0 0 0 5 9V18H4A2 2 0 0 0 2 20V22H14V20A2 2 0 0 0 12 18H11V12.89Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WaterPumpOffIcon",
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