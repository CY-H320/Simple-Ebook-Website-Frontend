<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon ice-pop-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M18.15 14.96L9.95 18.65L5.85 9.65C7.21 9.13 8.12 7.82 8.15 6.36C8.14 5 7.36 3.76 6.15 3.15C6.54 2.8 7 2.5 7.45 2.25C9.71 1.25 12.37 2.23 13.45 4.46M13.15 18.36L14.75 21.86L17.45 20.65L15.85 17.15">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "IcePopIcon",
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