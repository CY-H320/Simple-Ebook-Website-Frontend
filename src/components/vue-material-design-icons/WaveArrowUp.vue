<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon wave-arrow-up-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 7H22V9H20C18.62 9 17.26 8.65 16 8C13.5 9.3 10.5 9.3 8 8C6.74 8.65 5.37 9 4 9H2V7H4C5.39 7 6.78 6.53 8 5.67C10.44 7.38 13.56 7.38 16 5.67C17.22 6.53 18.61 7 20 7M12 11L16 15H13V22H11V15H8L12 11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WaveArrowUpIcon",
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