<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon scanner-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4.2,10.7L19.8,5L20.5,6.9L6.4,12H19A2,2 0 0,1 21,14V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V12.5C3,11.7 3.5,10.9 4.2,10.7M17,17H19V15H17V17M5,17H15V15H5V17Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ScannerIcon",
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