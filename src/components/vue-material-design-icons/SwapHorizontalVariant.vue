<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon swap-horizontal-variant-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4,6L8,10V7H16A2,2 0 0,1 18,9A2,2 0 0,1 16,11H8A4,4 0 0,0 4,15A4,4 0 0,0 8,19H16V22L20,18L16,14V17H8A2,2 0 0,1 6,15A2,2 0 0,1 8,13H16A4,4 0 0,0 20,9A4,4 0 0,0 16,5H8V2L4,6Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SwapHorizontalVariantIcon",
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