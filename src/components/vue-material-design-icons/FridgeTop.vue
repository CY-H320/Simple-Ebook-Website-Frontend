<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon fridge-top-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M8,8V6H10V8H8M7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2M7,4V9H17V4H7M8,12V15H10V12H8Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FridgeTopIcon",
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