<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon file-sync-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M11 17.5C11 13.9 13.9 11 17.5 11C18.4 11 19.2 11.2 20 11.5V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H12.8C11.7 20.8 11 19.2 11 17.5M13 3.5L18.5 9H13V3.5M17 12V13.5C19.2 13.5 21 15.3 21 17.5C21 18.3 20.8 19.1 20.3 19.7L19.2 18.6C19.4 18.3 19.5 17.9 19.5 17.5C19.5 16.1 18.4 15 17 15V16.5L14.8 14.3L17 12M17 23V21.5C14.8 21.5 13 19.7 13 17.5C13 16.7 13.2 15.9 13.7 15.3L14.8 16.4C14.6 16.7 14.5 17.1 14.5 17.5C14.5 18.9 15.6 20 17 20V18.5L19.2 20.7L17 23Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileSyncIcon",
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