<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon bluetooth-transfer-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M14.71,7.71L10.41,12L14.71,16.29L9,22H8V14.41L3.41,19L2,17.59L7.59,12L2,6.41L3.41,5L8,9.59V2H9L14.71,7.71M10,5.83V9.59L11.88,7.71L10,5.83M11.88,16.29L10,14.41V18.17L11.88,16.29M22,8H20V11H18V8H16L19,4L22,8M22,16L19,20L16,16H18V13H20V16H22Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BluetoothTransferIcon",
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