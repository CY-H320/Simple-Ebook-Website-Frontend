<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon forest-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19.19 18H24L20.14 12H22L15 2L12.61 5.41L17.92 13H15.97L19.19 18M16 12L9 2L2 12H3.86L0 18H7V22H11V18H18L14.14 12H16M12.16 10H10.5L14.34 16H3.67L7.53 10H5.84L9 5.5L12.16 10M13 19V22H17V19H13Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ForestOutlineIcon",
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