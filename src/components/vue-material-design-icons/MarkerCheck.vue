<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon marker-check-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M10,16L5,11L6.41,9.58L10,13.17L17.59,5.58L19,7M19,1H5C3.89,1 3,1.89 3,3V15.93C3,16.62 3.35,17.23 3.88,17.59L12,23L20.11,17.59C20.64,17.23 21,16.62 21,15.93V3C21,1.89 20.1,1 19,1Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MarkerCheckIcon",
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