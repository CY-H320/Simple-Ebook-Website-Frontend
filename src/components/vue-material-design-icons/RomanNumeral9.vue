<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon roman-numeral9-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M11 7V9H10V15H11V17H7V15H8V9H7V7H11M12 7L14 12L12 17H14L15 14.5L16 17H18L16 12L18 7H16L15 9.5L14 7H12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RomanNumeral9Icon",
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