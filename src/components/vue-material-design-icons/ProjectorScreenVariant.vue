<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon projector-screen-variant-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 18V9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ProjectorScreenVariantIcon",
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