<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon file-document-alert-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 17H22V15H20V17M20 7V13H22V7H20M11 9H16.5L11 3.5V9M4 2H12L18 8V20C18 21.11 17.11 22 16 22H4C2.89 22 2 21.1 2 20V4C2 2.89 2.89 2 4 2M13 18V16H4V18H13M16 14V12H4V14H16Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileDocumentAlertIcon",
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