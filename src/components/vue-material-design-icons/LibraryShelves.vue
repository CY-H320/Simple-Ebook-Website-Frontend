<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon library-shelves-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19.5,9V1.5H16.5V9H13.5V1.5H10.5V9H7.5V1.5H4.65V9H3V10.5H21V9H19.5M19.5,13.5H16.5V21H13.5V13.5H10.5V21H7.5V13.5H4.65V21H3V22.5H21V21H19.5V13.5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LibraryShelvesIcon",
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