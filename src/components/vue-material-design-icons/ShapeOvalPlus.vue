<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon shape-oval-plus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 5H22V7H19V10H17V7H14V5H17V2H19V5M11 4L12 4.09V6.14C11.68 6.05 11.34 6 11 6C8.24 6 6 9.13 6 13C6 16.87 8.24 20 11 20C13.76 20 16 16.87 16 13L15.95 12H17.96L18 13C18 17.97 14.87 22 11 22C7.13 22 4 17.97 4 13C4 8.03 7.13 4 11 4Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShapeOvalPlusIcon",
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