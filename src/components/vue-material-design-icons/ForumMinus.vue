<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon forum-minus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 6H19V12.1C20.2 12.3 21.2 12.8 22 13.5V7C22 6.5 21.5 6 21 6M6 17C6 17.5 6.5 18 7 18H12C12 16.9 12.3 15.9 12.8 15H6V17M16 2H3C2.5 2 2 2.5 2 3V17L6 13H14.7C15.4 12.5 16.2 12.2 17 12.1V3C17 2.5 16.5 2 16 2M22 17V19H14V17H22Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ForumMinusIcon",
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