<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon book-minus-multiple-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M13.09 20H5V6H3V20C3 21.11 3.9 22 5 22H13.81C13.44 21.39 13.2 20.71 13.09 20M19 2H9C7.9 2 7 2.9 7 4V16C7 17.11 7.9 18 9 18H13.09C13.2 17.29 13.44 16.61 13.81 16H9V4H11V10L13.5 7.75L16 10V4H19V13C19.68 13 20.36 13.11 21 13.34V4C21 2.9 20.11 2 19 2M23 18V20H15V18H23Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookMinusMultipleOutlineIcon",
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