<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon server-minus-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M8 17H16V19H8V17M2 5.6V10.4C2 11.3 2.5 12 3.2 12H20.9C21.5 12 22.1 11.3 22.1 10.4V5.6C22 4.7 21.5 4 20.8 4H3.2C2.5 4 2 4.7 2 5.6M10 9V7H9V9H10M5 9H7V7H5V9M20 10H4V6H20V10Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ServerMinusOutlineIcon",
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