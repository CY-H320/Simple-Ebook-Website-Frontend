<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon hand-pointing-left-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M3,9H13L11.31,5.8L11.28,5.58C11.28,5.29 11.4,5.03 11.6,4.84L12.37,4.1L16.57,9C16.84,9.26 17,9.61 17,10V16.5C17,17.27 16.3,18 15.5,18H11.14C10.53,18 10,17.65 9.8,17.15L7.6,12.21L7.47,11H3A1,1 0 0,1 2,10A1,1 0 0,1 3,9M19,18V10H22V18H19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HandPointingLeftIcon",
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