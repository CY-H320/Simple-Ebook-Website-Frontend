<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon printer-pos-off-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2.39 1.73L1.11 3L7 8.89V10H6C4.89 10 4 10.9 4 12V19H17.11L20.84 22.73L22.11 21.46L2.39 1.73M6 17V12H10.11L15.11 17H6M9.2 6L7.2 4H17V10H18C19.11 10 20 10.9 20 12V16.8L18 14.8V12H15.2L13.2 10H15V6H9.2M7 13H11V15H7V13Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PrinterPosOffOutlineIcon",
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