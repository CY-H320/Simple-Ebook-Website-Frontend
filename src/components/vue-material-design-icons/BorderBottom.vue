<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon border-bottom-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5,15H3V17H5M3,21H21V19H3M5,11H3V13H5M19,9H21V7H19M19,5H21V3H19M5,7H3V9H5M19,17H21V15H19M19,13H21V11H19M17,3H15V5H17M13,3H11V5H13M17,11H15V13H17M13,7H11V9H13M5,3H3V5H5M13,11H11V13H13M9,3H7V5H9M13,15H11V17H13M9,11H7V13H9V11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BorderBottomIcon",
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