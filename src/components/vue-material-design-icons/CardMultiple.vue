<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon card-multiple-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 3C21.53 3 22.04 3.21 22.41 3.59C22.79 3.96 23 4.47 23 5V15C23 15.53 22.79 16.04 22.41 16.41C22.04 16.79 21.53 17 21 17H7C6.47 17 5.96 16.79 5.59 16.41C5.21 16.04 5 15.53 5 15V5C5 4.47 5.21 3.96 5.59 3.59C5.96 3.21 6.47 3 7 3H21M3 19H18V21H3C2.47 21 1.96 20.79 1.59 20.41C1.21 20.04 1 19.53 1 19V8H3V19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CardMultipleIcon",
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