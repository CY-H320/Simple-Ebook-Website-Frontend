<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon application-parentheses-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M15.6 8C17.1 9.3 18 11.1 18 13C18 14.9 17.1 16.7 15.6 18L14 17.4C15.3 16.4 16 14.7 16 13S15.3 9.6 14 8.6L15.6 8M8.4 8L10 8.6C8.7 9.6 8 11.3 8 13S8.7 16.4 10 17.4L8.4 18C6.9 16.7 6 14.9 6 13S6.9 9.3 8.4 8Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ApplicationParenthesesOutlineIcon",
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