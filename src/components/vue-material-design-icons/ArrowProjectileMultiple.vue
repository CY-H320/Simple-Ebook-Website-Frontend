<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon arrow-projectile-multiple-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 16L22 19L20 20L19 22L16 19V17.06L12 13.06L8 17.06V19L5 22L4 20L2 19L5 16H6.94L10.94 12L4.97 6.03L4 7L2 2L7 4L6.03 4.97L12 10.94L17.97 4.97L17 4L22 2L20 7L19.03 6.03L13.06 12L17.06 16H19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowProjectileMultipleIcon",
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