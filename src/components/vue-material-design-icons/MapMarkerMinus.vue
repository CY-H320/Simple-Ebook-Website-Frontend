<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon map-marker-minus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M9,11.5A2.5,2.5 0 0,0 11.5,9A2.5,2.5 0 0,0 9,6.5A2.5,2.5 0 0,0 6.5,9A2.5,2.5 0 0,0 9,11.5M9,2C12.86,2 16,5.13 16,9C16,14.25 9,22 9,22C9,22 2,14.25 2,9A7,7 0 0,1 9,2M15,17H23V19H15V17Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MapMarkerMinusIcon",
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