<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon bluetooth-settings-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M14.88,14.29L13,16.17V12.41L14.88,14.29M13,3.83L14.88,5.71L13,7.59M17.71,5.71L12,0H11V7.59L6.41,3L5,4.41L10.59,10L5,15.59L6.41,17L11,12.41V20H12L17.71,14.29L13.41,10L17.71,5.71M15,24H17V22H15M7,24H9V22H7M11,24H13V22H11V24Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BluetoothSettingsIcon",
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