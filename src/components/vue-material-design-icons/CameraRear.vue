<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon camera-rear-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12,6C10.89,6 10,5.1 10,4A2,2 0 0,1 12,2C13.09,2 14,2.9 14,4A2,2 0 0,1 12,6M17,0H7A2,2 0 0,0 5,2V16A2,2 0 0,0 7,18H17A2,2 0 0,0 19,16V2A2,2 0 0,0 17,0M14,20V22H19V20M10,20H5V22H10V24L13,21L10,18V20Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CameraRearIcon",
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