<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon border-radius-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M3 16C3 18.8 5.2 21 8 21H10V19H8C6.3 19 5 17.7 5 16V14H3V16M21 8C21 5.2 18.8 3 16 3H14V5H16C17.7 5 19 6.3 19 8V10H21V8M16 21C18.8 21 21 18.8 21 16V14H19V16C19 17.7 17.7 19 16 19H14V21H16M8 3C5.2 3 3 5.2 3 8V10H5V8C5 6.3 6.3 5 8 5H10V3H8Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BorderRadiusIcon",
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