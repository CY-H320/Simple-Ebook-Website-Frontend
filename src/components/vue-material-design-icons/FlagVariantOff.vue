<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon flag-variant-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20.8 22.7L10.2 12.1C7.8 12.4 7 14 7 14V21H5V6.9L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M20 12V4C20 4 19 6 16 6C14 6 14 4 11 4C9.8 4 8.7 4.3 7.8 4.6L17.1 13.9C19.2 13.5 20 12 20 12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlagVariantOffIcon",
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