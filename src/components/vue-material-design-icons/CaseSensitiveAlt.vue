<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon case-sensitive-alt-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20,14C20,12.5 19.5,12 18,12H16V11C16,10 16,10 14,10V15.4L14,19H16L18,19C19.5,19 20,18.47 20,17V14M12,12C12,10.5 11.47,10 10,10H6C4.5,10 4,10.5 4,12V19H6V16H10V19H12V12M10,7H14V5H10V7M22,9V20C22,21.11 21.11,22 20,22H4A2,2 0 0,1 2,20V9C2,7.89 2.89,7 4,7H8V5L10,3H14L16,5V7H20A2,2 0 0,1 22,9H22M16,17H18V14H16V17M6,12H10V14H6V12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CaseSensitiveAltIcon",
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