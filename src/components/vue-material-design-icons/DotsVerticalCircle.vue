<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon dots-vertical-circle-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5A1.5,1.5 0 0,0 10.5,12M10.5,17.5A1.5,1.5 0 0,0 12,19A1.5,1.5 0 0,0 13.5,17.5A1.5,1.5 0 0,0 12,16A1.5,1.5 0 0,0 10.5,17.5M10.5,6.5A1.5,1.5 0 0,0 12,8A1.5,1.5 0 0,0 13.5,6.5A1.5,1.5 0 0,0 12,5A1.5,1.5 0 0,0 10.5,6.5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DotsVerticalCircleIcon",
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