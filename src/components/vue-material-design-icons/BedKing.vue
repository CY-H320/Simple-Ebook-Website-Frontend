<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon bed-king-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6 5C5.47 5 5 5.21 4.59 5.6S4 6.45 4 7V10C3.45 10 3 10.19 2.6 10.59S2 11.47 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12C22 11.47 21.79 11 21.4 10.59C21 10.19 20.55 10 20 10V7C20 6.45 19.81 6 19.41 5.6S18.53 5 18 5M6 7H11V10H6M13 7H18V10H13Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BedKingIcon",
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