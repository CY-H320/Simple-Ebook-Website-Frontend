<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon toy-brick-minus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M23 20H15V18H23V20M13 19C13 15.69 15.69 13 19 13C19.7 13 20.37 13.13 21 13.35V6H19V5C19 3.9 18.11 3 17 3H15C13.9 3 13 3.9 13 5V6H11V5C11 3.9 10.11 3 9 3H7C5.9 3 5 3.9 5 5V6H3V20H13.09C13.04 19.67 13 19.34 13 19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ToyBrickMinusIcon",
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