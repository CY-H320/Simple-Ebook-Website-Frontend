<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon water-alert-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M10 3.25C10 3.25 4 10 4 14C4 17.31 6.69 20 10 20S16 17.31 16 14C16 10 10 3.25 10 3.25M10 18C7.79 18 6 16.21 6 14C6 12.23 8 8.96 10 6.39C12 8.95 14 12.23 14 14C14 16.21 12.21 18 10 18M20 7V13H18V7H20M18 17H20V15H18V17Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WaterAlertOutlineIcon",
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