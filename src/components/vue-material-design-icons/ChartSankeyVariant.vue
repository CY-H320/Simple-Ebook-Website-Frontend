<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon chart-sankey-variant-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 4V6H4V4H2V12H4V10C8.16 10 9.92 12.11 11.77 14.34S15.65 19 20 19V21H22V15H20V17C16.59 17 15.07 15.17 13.31 13.06C11.34 10.69 9.1 8 4 8H20V10H22V4Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ChartSankeyVariantIcon",
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