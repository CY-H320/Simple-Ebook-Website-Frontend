<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon format-textbox-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21,7V3H17V4H7V3H3V7H4V17H3V21H7V20H17V21H21V17H20V7H21M18,4H20V6H18V4M4,4H6V6H4V4M6,20H4V18H6V20M20,20H18V18H20V20M18,17H17V18H7V17H6V7H7V6H17V7H18V17M16,8V10H13V16H11V10H8V8H16Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatTextboxIcon",
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