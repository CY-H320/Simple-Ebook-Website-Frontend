<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon keyboard-f2-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5 7H11V9H7V11H10V13H7V17H5V7M13 7H17C18.11 7 19 7.9 19 9V11C19 12.11 18.11 13 17 13H15V15H19V17H13V13C13 11.9 13.9 11 15 11H17V9H13V7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "KeyboardF2Icon",
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