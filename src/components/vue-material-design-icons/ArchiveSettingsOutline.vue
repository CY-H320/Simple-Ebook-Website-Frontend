<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon archive-settings-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M3 2V8H21V2H3M19 6H5V4H19V6M18 9H20V20H4V9H6V18H18V9M15 10.5V12H9V10.5C9 10.22 9.22 10 9.5 10H14.5C14.78 10 15 10.22 15 10.5M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArchiveSettingsOutlineIcon",
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