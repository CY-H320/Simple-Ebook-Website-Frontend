<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon format-text-wrapping-wrap-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M7,21H5V3H7V21M19,3H17V21H19V3M13,8H9V10H12.97C13.14,10 14,10.16 14,12C14,13.84 13.14,14 13,14H11V12L8,15L11,18V16H13C14.04,16 16,15.16 16,12C16,8.84 14.04,8 13,8Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatTextWrappingWrapIcon",
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