<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon account-multiple-minus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 17V19H7V17S7 13 13 13 19 17 19 17M16 8A3 3 0 1 0 13 11A3 3 0 0 0 16 8M19.2 13.06A5.6 5.6 0 0 1 21 17V19H24V17S24 13.55 19.2 13.06M18 5A2.91 2.91 0 0 0 17.11 5.14A5 5 0 0 1 17.11 10.86A2.91 2.91 0 0 0 18 11A3 3 0 0 0 18 5M8 10H0V12H8Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AccountMultipleMinusIcon",
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