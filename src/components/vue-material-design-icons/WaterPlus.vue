<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon water-plus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 18C12 18.7 12.12 19.36 12.34 20C12.23 20 12.12 20 12 20C8.69 20 6 17.31 6 14C6 10 12 3.25 12 3.25S16.31 8.1 17.62 12C14.5 12.22 12 14.82 12 18M19 17V14H17V17H14V19H17V22H19V19H22V17H19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WaterPlusIcon",
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