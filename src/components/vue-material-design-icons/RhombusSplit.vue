<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon rhombus-split-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 2C11.5 2 11 2.19 10.59 2.59L7.29 5.88L12 10.58L16.71 5.88L13.41 2.59C13 2.19 12.5 2 12 2M5.88 7.29L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L5.88 16.71L10.58 12L5.88 7.29M18.12 7.29L13.42 12L18.12 16.71L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L18.12 7.29M12 13.42L7.29 18.12L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L16.71 18.12L12 13.42Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RhombusSplitIcon",
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