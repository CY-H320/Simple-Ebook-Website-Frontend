<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon storage-tank-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M17 6H16V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V6H7C3.69 6 1 8.69 1 12S3.69 18 7 18V21H9V18H15V21H17V18C20.31 18 23 15.31 23 12S20.31 6 17 6M10 5H14V6H10V5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "StorageTankIcon",
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