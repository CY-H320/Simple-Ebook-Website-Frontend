<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon fridge-industrial-alert-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M8 15H6V10H8V15M17 4V19C17 20.11 16.11 21 15 21V22H13V21H7V22H5V21C3.9 21 3 20.11 3 19V4C3 2.9 3.9 2 5 2H15C16.11 2 17 2.9 17 4M15 4H5V19H15V4M19 17H21V15H19V17M19 7V13H21V7H19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FridgeIndustrialAlertOutlineIcon",
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