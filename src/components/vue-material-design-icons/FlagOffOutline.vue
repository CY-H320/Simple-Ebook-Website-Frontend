<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon flag-off-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V21H7V14H12.11L12.72 14.61L13 16H14.11L20.84 22.73L22.11 21.46M7 12V8.89L10.11 12H7M9.2 6L7.2 4H14L14.4 6H20V16H19.2L17.2 14H18V8H12.76L12.36 6H9.2Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlagOffOutlineIcon",
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