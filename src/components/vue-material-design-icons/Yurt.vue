<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon yurt-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22 14.87V22H14V16H10V22H2V14.87C2 14.33 2.29 13.83 2.76 13.57L8.66 10.2C8.88 10.07 9.14 10 9.4 10H12.5V9H14V10H14.59C14.85 10 15.11 10.07 15.33 10.2L21.23 13.57C21.71 13.84 22 14.33 22 14.87M7.86 6.25H9.4C10.73 6.25 11.92 6.95 12.5 8H14C13.6 6.2 12 4.85 10.1 4.85V3.35C11.1 3.35 11.95 2.5 11.95 1.5V1H7.86V2.5C6.86 2.5 6 3.23 6 4.25S6.86 6.25 7.86 6.25Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "YurtIcon",
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