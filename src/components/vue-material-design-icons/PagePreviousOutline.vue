<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon page-previous-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2,3H19A2,2 0 0,1 21,5V9H19V5H2V19H19V15H21V19A2,2 0 0,1 19,21H2A2,2 0 0,1 0,19V5A2,2 0 0,1 2,3M17,15V13H24V11H17V9L13,12L17,15M4,13H11V11H4V13M4,9H11V7H4V9M4,17H8V15H4V17Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PagePreviousOutlineIcon",
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