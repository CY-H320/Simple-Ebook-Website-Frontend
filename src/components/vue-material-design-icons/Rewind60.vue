<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon rewind60-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 14V20C19 21.1 18.1 22 17 22H15C13.9 22 13 21.1 13 20V14C13 12.9 13.9 12 15 12H17C18.1 12 19 12.9 19 14M15 14V20H17V14H15M12.5 3C17.1 3 21.1 6 22.5 10.2L20.1 11C19 7.8 16 5.5 12.5 5.5C10.5 5.5 8.8 6.2 7.4 7.4L10 10H3V3L5.6 5.6C7.4 4 9.9 3 12.5 3M7 12C5.9 12 5 12.9 5 14V20C5 21.1 5.9 22 7 22H9C10.1 22 11 21.1 11 20V18C11 16.9 10.1 16 9 16H7V14H11V12H7M7 18H9V20H7V18Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Rewind60Icon",
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