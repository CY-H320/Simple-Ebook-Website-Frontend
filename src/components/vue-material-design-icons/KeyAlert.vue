<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon key-alert-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4 6.5C4 4 6 2 8.5 2S13 4 13 6.5C13 8.46 11.75 10.13 10 10.74V15H13V18H10V22H7V10.74C5.25 10.13 4 8.46 4 6.5M7 6.5C7 7.33 7.67 8 8.5 8S10 7.33 10 6.5 9.33 5 8.5 5 7 5.67 7 6.5M18 7H20V13H18M18 17H20V15H18">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "KeyAlertIcon",
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