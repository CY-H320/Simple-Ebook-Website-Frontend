<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon octagram-minus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2.2 16.06L3.88 12L2.2 7.94L6.26 6.26L7.94 2.2L12 3.88L16.06 2.2L17.74 6.26L21.8 7.94L20.12 12L20.63 13.22C20.11 13.08 19.56 13 19 13C15.69 13 13 15.69 13 19C13 19.56 13.08 20.11 13.22 20.63L12 20.12L7.94 21.8L6.26 17.74L2.2 16.06M15 20V18H23V20H15Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "OctagramMinusIcon",
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