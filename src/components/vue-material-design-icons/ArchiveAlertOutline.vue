<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon archive-alert-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2 4H18V7H2V4M7.5 11H12.5C12.78 11 13 11.22 13 11.5V13H7V11.5C7 11.22 7.22 11 7.5 11M20 13V7H22V13H20M20 17V15H22V17H20M3 8H5V18H15V8H17V20H3V8Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArchiveAlertOutlineIcon",
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