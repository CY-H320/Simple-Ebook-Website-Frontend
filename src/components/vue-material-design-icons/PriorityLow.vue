<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon priority-low-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M14,5H22V7H14V5M14,10.5H22V12.5H14V10.5M14,16H22V18H14V16M2,11.5C2,15.08 4.92,18 8.5,18H9V20L12,17L9,14V16H8.5C6,16 4,14 4,11.5C4,9 6,7 8.5,7H12V5H8.5C4.92,5 2,7.92 2,11.5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PriorityLowIcon",
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