<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon format-list-group-plus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M17 14V17H14V19H17V22H19V19H22V17H19V14M20 11V12.3C19.4 12.1 18.7 12 18 12C16.8 12 15.6 12.4 14.7 13H7V11H20M12.1 17H7V15H12.8C12.5 15.6 12.2 16.3 12.1 17M7 7H20V9H7V7M5 19H7V21H3V3H7V5H5V19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatListGroupPlusIcon",
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