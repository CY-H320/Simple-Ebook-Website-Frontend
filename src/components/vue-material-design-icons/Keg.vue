<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon keg-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5,22V20H6V16H5V14H6V11H5V7H11V3H10V2H11L13,2H14V3H13V7H19V11H18V14H19V16H18V20H19V22H5M17,9A1,1 0 0,0 16,8H14A1,1 0 0,0 13,9A1,1 0 0,0 14,10H16A1,1 0 0,0 17,9Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "KegIcon",
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