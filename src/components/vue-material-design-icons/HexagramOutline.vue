<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon hexagram-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12,7L13.3,9.8L16.5,9.4L14.5,12L16.4,14.5L13.2,14.1L12,17L10.7,14.2L7.5,14.6L9.5,12L7.6,9.5L10.8,9.9L12,7M12,2L9.5,7.7L3.3,7L7,12L3.4,17L9.6,16.3L12,22L14.5,16.3L20.7,16.9L17,12L20.6,7L14.4,7.7L12,2Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HexagramOutlineIcon",
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