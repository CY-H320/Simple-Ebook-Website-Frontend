<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon image-size-select-large-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21,15H23V17H21V15M21,11H23V13H21V11M23,19H21V21C22,21 23,20 23,19M13,3H15V5H13V3M21,7H23V9H21V7M21,3V5H23C23,4 22,3 21,3M1,7H3V9H1V7M17,3H19V5H17V3M17,19H19V21H17V19M3,3C2,3 1,4 1,5H3V3M9,3H11V5H9V3M5,3H7V5H5V3M1,11V19A2,2 0 0,0 3,21H15V11H1M3,19L5.5,15.79L7.29,17.94L9.79,14.72L13,19H3Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ImageSizeSelectLargeIcon",
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