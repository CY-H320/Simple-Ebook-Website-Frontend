<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon eye-minus-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 4.5A11.8 11.8 0 0 0 1 12A11.8 11.8 0 0 0 12 19.5H13.1A3.8 3.8 0 0 1 13 18.5A4.1 4.1 0 0 1 13.1 17.4H12A9.6 9.6 0 0 1 3.2 12A9.6 9.6 0 0 1 12 6.5A9.6 9.6 0 0 1 20.8 12L20.4 12.7A4.6 4.6 0 0 1 22.3 13.5A10.1 10.1 0 0 0 23 12A11.8 11.8 0 0 0 12 4.5M12 9A3 3 0 1 0 15 12A2.9 2.9 0 0 0 12 9M15 17.5V19.5H23V17.5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EyeMinusOutlineIcon",
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