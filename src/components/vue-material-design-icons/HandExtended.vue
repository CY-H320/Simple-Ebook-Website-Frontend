<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon hand-extended-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 13C20.6 13 21.1 13.2 21.5 13.6C21.8 14 22 14.5 22 15L14 18L7 16V7H8.9L16.2 9.7C16.7 9.9 17 10.3 17 10.8C17 11.1 16.9 11.4 16.7 11.6S16.1 12 15.8 12H13L11.2 11.3L10.9 12.2L13 13H20M1 7H5V18H1V7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HandExtendedIcon",
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