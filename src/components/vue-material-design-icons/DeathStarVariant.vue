<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon death-star-variant-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2.05,13H21.94C21.88,13.69 21.74,14.36 21.54,15H14V17H17V19H15V21H12.5V22C12.33,22 12.17,22 12,22C6.82,22 2.55,18.05 2.05,13M21.94,11H2.05C2.55,5.95 6.82,2 12,2C13.62,2 15.15,2.39 16.5,3.08V5H18.5V7H20V9H21.54C21.74,9.64 21.88,10.31 21.94,11M12,6.75A2.5,2.5 0 0,0 9.5,4.25A2.5,2.5 0 0,0 7,6.75A2.5,2.5 0 0,0 9.5,9.25A2.5,2.5 0 0,0 12,6.75Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DeathStarVariantIcon",
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