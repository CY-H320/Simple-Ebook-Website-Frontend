<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon train-car-hopper-covered-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M23 9V7H1V9L2 10.33V15H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H10L11 18H13L14 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V15H22V10.33L23 9M4 15V13L5.5 15H4M5 10V9H19V10H5M20 15H18.5L20 13V15Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TrainCarHopperCoveredIcon",
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