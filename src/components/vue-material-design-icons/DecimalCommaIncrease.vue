<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon decimal-comma-increase-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M9 5A3 3 0 0 0 6 8V11A3 3 0 0 0 12 11V8A3 3 0 0 0 9 5M10 11A1 1 0 0 1 8 11V8A1 1 0 0 1 10 8M16 14A3 3 0 0 0 19 11V8A3 3 0 0 0 13 8V11A3 3 0 0 0 16 14M15 8A1 1 0 0 1 17 8V11A1 1 0 0 1 15 11M19 20V18H13V16H19V14L22 17M5 13V16H4L3 13A1 1 0 0 1 5 13Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DecimalCommaIncreaseIcon",
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