<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon dance-pole-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 1V2L11.23 1.36L7.76 5.5L11 7.5V5.16L10.78 5L12 3.56V23H14V13.24L15.93 11.31C18.5 11.71 21.13 10.36 22.66 8.83L21.24 7.41C20.1 8.56 17.7 9.61 16 9.26L14 7.24V1M17 4A2 2 0 0 0 15 6A2 2 0 0 0 17 8A2 2 0 0 0 19 6A2 2 0 0 0 17 4M11 7.76L7.1 11.66C5.25 13.5 4.31 14.85 3.06 18.16L4.94 18.86C5.94 16.2 6.66 15.14 7.87 13.84L9.22 15.19L4.27 20.14L5.69 21.56L11 16.24Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DancePoleIcon",
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