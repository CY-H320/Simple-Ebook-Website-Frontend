<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon diving-scuba-tank-multiple-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22,18.5A2.5,2.5 0 0,1 19.5,21A2.5,2.5 0 0,1 17,18.5C17,17.47 17.62,16.59 18.5,16.21V6H14V7.35C15.22,7.93 16,9.15 16,10.5V22H2V10.5C2,9.15 2.78,7.93 4,7.35V6H2V4H4V3.5A1.5,1.5 0 0,1 5.5,2A1.5,1.5 0 0,1 7,3.5V4H11V3.5A1.5,1.5 0 0,1 12.5,2A1.5,1.5 0 0,1 14,3.5V4H18.5A2,2 0 0,1 20.5,6V16.21C21.38,16.59 22,17.47 22,18.5M11,7.35V6H7V7.35C8.22,7.93 9,9.15 9,10.5C9,9.15 9.78,7.93 11,7.35Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DivingScubaTankMultipleIcon",
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