<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon printer-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6,3V4.18L8.82,7H18V3H6M2.28,3L1,4.27L4.75,8C3.19,8.15 2,9.44 2,11V17H6V21H17.73L19.73,23L21,21.72L2.28,3M9.82,8L18.82,17H22V11A3,3 0 0,0 19,8H9.82M19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10M8,14H10.73L15.73,19H8V14Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PrinterOffIcon",
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