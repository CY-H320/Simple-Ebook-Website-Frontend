<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon file-document-arrow-right-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M23 19L20 16V18H16V20H20V22L23 19M13 19C13 18.7 13 18.3 13.1 18H6V16H13.8C14.3 15.2 14.9 14.5 15.7 14H6V12H18V13.1C18.3 13 18.7 13 19 13S19.7 13 20 13.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H13.8C13.3 21.1 13 20.1 13 19M13 3.5L18.5 9H13V3.5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileDocumentArrowRightIcon",
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