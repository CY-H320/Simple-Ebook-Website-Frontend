<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon camera-gopro-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20,5H15A2,2 0 0,0 13,7V12A2,2 0 0,0 15,14H20A2,2 0 0,0 22,12V7A2,2 0 0,0 20,5M17.5,12.5A3,3 0 0,1 14.5,9.5A3,3 0 0,1 17.5,6.5A3,3 0 0,1 20.5,9.5A3,3 0 0,1 17.5,12.5M17.5,11A1.5,1.5 0 0,1 16,9.5A1.5,1.5 0 0,1 17.5,8A1.5,1.5 0 0,1 19,9.5A1.5,1.5 0 0,1 17.5,11M12,15V5H4A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V15H12M10,12H4V7H10V12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CameraGoproIcon",
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