<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon scale-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22.11 21.46L20.84 22.73L19.11 21H18V19.89L12.11 14H11V12.89L10.31 12.2A7.92 7.92 0 0 0 7.09 13.68L8.46 15.06L7.05 16.47L5.68 15.1A7.94 7.94 0 0 0 4.06 19H6V21H2V20A10 10 0 0 1 8.68 10.57L3.85 5.74L2 5V3.89L1.11 3L2.39 1.73M21.91 18.71A10 10 0 0 0 14 10.2V8.2L22 5V3H6.2M12 18A1.84 1.84 0 0 0 11.12 18.21L7.27 20L11.12 21.79A1.84 1.84 0 0 0 12 22A2 2 0 0 0 12 18Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ScaleOffIcon",
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