<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon book-settings-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 2V18C20 19.11 19.11 20 18 20H6C4.89 20 4 19.11 4 18V2C4 .895 4.89 0 6 0H7V7L9.5 5.5L12 7V0H18C19.1 0 20 .89 20 2M7 24H9V22H7V24M15 24H17V22H15V24M11 24H13V22H11V24Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookSettingsIcon",
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