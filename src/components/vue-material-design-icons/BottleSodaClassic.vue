<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon bottle-soda-classic-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M15 13.77A3 3 0 0 0 15 18.23V20A2 2 0 0 1 13 22H11A2 2 0 0 1 9 20V18.23A3 3 0 0 0 9 13.77V9A12.28 12.28 0 0 0 10.91 4H10V2H14V4H13.09A12.28 12.28 0 0 0 15 9Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BottleSodaClassicIcon",
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