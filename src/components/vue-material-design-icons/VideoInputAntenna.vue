<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon video-input-antenna-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12,5A7,7 0 0,0 5,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H19A7,7 0 0,0 12,5M13,14.29C13.88,13.9 14.5,13.03 14.5,12A2.5,2.5 0 0,0 12,9.5A2.5,2.5 0 0,0 9.5,12C9.5,13 10.12,13.9 11,14.29V17.59L7.59,21L9,22.41L12,19.41L15,22.41L16.41,21L13,17.59V14.29M12,1A11,11 0 0,0 1,12H3A9,9 0 0,1 12,3A9,9 0 0,1 21,12H23A11,11 0 0,0 12,1Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VideoInputAntennaIcon",
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