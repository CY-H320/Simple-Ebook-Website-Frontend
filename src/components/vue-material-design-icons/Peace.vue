<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon peace-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14.41V19.93C9.58,19.75 8.23,19.19 7.1,18.31L11,14.41M13,14.41L16.9,18.31C15.77,19.19 14.42,19.75 13,19.93V14.41M4,12C4,7.97 7,4.57 11,4.07V11.59L5.69,16.9C4.59,15.5 4,13.78 4,12M18.31,16.9L13,11.59V4.07C17,4.57 20,7.97 20,12C20,13.78 19.41,15.5 18.31,16.9Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PeaceIcon",
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