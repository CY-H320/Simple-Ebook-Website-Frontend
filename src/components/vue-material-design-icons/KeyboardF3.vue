<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon keyboard-f3-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5 7H11V9H7V11H10V13H7V17H5V7M19 15C19 16.11 18.11 17 17 17H13V15H17V13H15V11H17V9H13V7H17C18.1 7 19 7.89 19 9V10.5C19 11.33 18.33 12 17.5 12C18.33 12 19 12.67 19 13.5V15Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "KeyboardF3Icon",
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