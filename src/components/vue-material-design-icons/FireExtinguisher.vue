<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon fire-extinguisher-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M10.5,7H11.75L12,5H10.25L6,7.5V9H4V6.5L10,3H12V2H14V3H16L17,2.5V5.5L16,5H14L14.25,7H15.5A1.5,1.5 0 0,1 17,8.5V22H9V8.5A1.5,1.5 0 0,1 10.5,7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FireExtinguisherIcon",
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