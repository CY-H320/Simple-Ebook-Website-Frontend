<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon shredder-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6,3V7H8V5H16V7H18V3H6M5,8A3,3 0 0,0 2,11V17H5V14H19V17H22V11A3,3 0 0,0 19,8H5M18,10A1,1 0 0,1 19,11A1,1 0 0,1 18,12A1,1 0 0,1 17,11A1,1 0 0,1 18,10M7,16V21H9V16H7M11,16V20H13V16H11M15,16V21H17V16H15Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShredderIcon",
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