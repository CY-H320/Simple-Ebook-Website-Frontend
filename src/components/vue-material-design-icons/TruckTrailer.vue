<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon truck-trailer-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22,15V17H10A3,3 0 0,1 7,20A3,3 0 0,1 4,17H2V6A2,2 0 0,1 4,4H17A2,2 0 0,1 19,6V15H22M7,16A1,1 0 0,0 6,17A1,1 0 0,0 7,18A1,1 0 0,0 8,17A1,1 0 0,0 7,16Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TruckTrailerIcon",
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