<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon printer3d-nozzle-alert-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M7 2H17V7H19V13H16.5L13 17H11L7.5 13H5V7H7V2M10 22H2V20H10C10.6 20 11 19.5 11 19V18H13V19C13 20.7 11.7 22 10 22M7 9V11H8.5L12 15L15.5 11H17V9H15V4H9V9H7M21 13V7H23V13H21M21 17V15H23V17H21Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Printer3dNozzleAlertOutlineIcon",
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