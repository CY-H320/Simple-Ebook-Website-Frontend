<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon ocr-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2 5V19H14V17H12C10.89 17 10 16.11 10 15V9C10 7.89 10.89 7 12 7H14V5M14 7V9H16V7M14 9H12V15H14M14 15V17H16V15M5 7H7C8.11 7 9 7.89 9 9V15C9 16.11 8.11 17 7 17H5C3.89 17 3 16.11 3 15V9C3 7.89 3.89 7 5 7M17 7V17H19V13H20V14H21V17H23V14H22V12H23V8H22V7M5 9V15H7V9M19 9H21V11H19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "OcrIcon",
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