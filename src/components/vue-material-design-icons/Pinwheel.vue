<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon pinwheel-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12,12C12,9 14.5,6.5 17.5,6.5C20.5,6.5 23,9 23,12H12M12,12C12,15 9.5,17.5 6.5,17.5C3.5,17.5 1,15 1,12H12M12,12C9,12 6.5,9.5 6.5,6.5C6.5,3.5 9,1 12,1V12M12,12C15,12 17.5,14.5 17.5,17.5C17.5,20.5 15,23 12,23V12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PinwheelIcon",
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