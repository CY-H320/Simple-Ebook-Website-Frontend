<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon tank-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20,12H4V11H6L7,6H12L13,11H20V12M13.22,7L13.62,9H22V7H13.22M22,16A3,3 0 0,1 19,19H5A3,3 0 0,1 2,16A3,3 0 0,1 5,13H19A3,3 0 0,1 22,16M6,16A1,1 0 0,0 5,15A1,1 0 0,0 4,16A1,1 0 0,0 5,17A1,1 0 0,0 6,16M13,16A1,1 0 0,0 12,15A1,1 0 0,0 11,16A1,1 0 0,0 12,17A1,1 0 0,0 13,16M20,16A1,1 0 0,0 19,15A1,1 0 0,0 18,16A1,1 0 0,0 19,17A1,1 0 0,0 20,16Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TankIcon",
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