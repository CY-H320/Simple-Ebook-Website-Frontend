<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon beaker-remove-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M15.46 15.88L16.88 14.46L19 16.59L21.12 14.47L22.53 15.88L20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.53L15.47 20.12L17.59 18L15.46 15.88M3 3H21V5C19.9 5 19 5.9 19 7V12C15.69 12 13 14.69 13 18C13 19.09 13.29 20.12 13.8 21H7C5.9 21 5 20.1 5 19V7C5 5.9 4.1 5 3 5V3M7 9V10H10V9H7M7 11V12H10V11H7M10 16V15H7V16H10M12 14V13H7V14H12M12 8V7H7V8H12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BeakerRemoveIcon",
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