<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon chevron-triple-left-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M9.42,7.41L4.83,12L9.42,16.59L8,18L2,12L8,6L9.42,7.41M15.42,7.41L10.83,12L15.42,16.59L14,18L8,12L14,6L15.42,7.41M21.42,7.41L16.83,12L21.42,16.59L20,18L14,12L20,6L21.42,7.41Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ChevronTripleLeftIcon",
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