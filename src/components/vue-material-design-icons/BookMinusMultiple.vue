<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon book-minus-multiple-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M13.09 20H5V6H3V20C3 21.11 3.9 22 5 22H13.81C13.44 21.39 13.2 20.71 13.09 20M19 2H14V7L12 5.5L10 7V2H9C7.9 2 7 2.9 7 4V16C7 17.11 7.9 18 9 18H13.09C13.64 14.73 16.74 12.53 20 13.08C20.34 13.14 20.68 13.23 21 13.34V4C21 2.9 20.11 2 19 2M23 18V20H15V18H23Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookMinusMultipleIcon",
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