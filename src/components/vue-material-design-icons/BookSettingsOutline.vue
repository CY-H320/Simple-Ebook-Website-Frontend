<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon book-settings-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M18 0H6C4.89 0 4 .895 4 2V18C4 19.11 4.89 20 6 20H18C19.11 20 20 19.11 20 18V2C20 .895 19.11 0 18 0M18 18H6V2H8V10L10.5 7.75L13 10V2H18V18M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookSettingsOutlineIcon",
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