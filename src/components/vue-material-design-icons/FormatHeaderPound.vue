<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon format-header-pound-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatHeaderPoundIcon",
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