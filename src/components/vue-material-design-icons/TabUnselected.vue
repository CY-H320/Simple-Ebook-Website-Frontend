<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon tab-unselected-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M1,9H3V7H1V9M1,13H3V11H1V13M1,5H3V3A2,2 0 0,0 1,5M9,21H11V19H9V21M1,17H3V15H1V17M3,21V19H1A2,2 0 0,0 3,21M21,3H13V9H23V5A2,2 0 0,0 21,3M21,17H23V15H21V17M9,5H11V3H9V5M5,21H7V19H5V21M5,5H7V3H5V5M21,21A2,2 0 0,0 23,19H21V21M21,13H23V11H21V13M13,21H15V19H13V21M17,21H19V19H17V21Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TabUnselectedIcon",
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