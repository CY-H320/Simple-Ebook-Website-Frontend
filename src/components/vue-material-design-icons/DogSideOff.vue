<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon dog-side-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M18 10L15 7L19 3V5L22 8L20 10L19 9L18 10M17 11L14 8L13 9H12.2L17 13.8V11M2.39 1.73L1.11 3L7.11 9H5L3 7L2 8L5 11V14L4 15V21H6V18L8 15H13.11L15 16.89V21H17V18.89L20.84 22.73L22.11 21.46L2.39 1.73Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DogSideOffIcon",
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