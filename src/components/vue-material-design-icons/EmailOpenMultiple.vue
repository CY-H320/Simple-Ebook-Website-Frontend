<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon email-open-multiple-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6,8L14,13L22,8V8L14,3L6,8V8M24,8V18A2,2 0 0,1 22,20H6A2,2 0 0,1 4,18V8C4,7.27 4.39,6.64 4.97,6.29L14,0.64L23.03,6.29C23.61,6.64 24,7.27 24,8M2,8V22H20V24H2A2,2 0 0,1 0,22V8H2Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EmailOpenMultipleIcon",
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