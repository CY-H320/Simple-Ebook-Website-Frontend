<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon briefcase-minus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22,17V19H14V17H22M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V13.53C20.94,12.58 19.54,12 18,12A6,6 0 0,0 12,18C12,19.09 12.29,20.12 12.8,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BriefcaseMinusIcon",
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