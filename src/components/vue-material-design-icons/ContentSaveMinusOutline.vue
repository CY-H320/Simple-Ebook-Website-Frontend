<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon content-save-minus-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5 3C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H12.81C12.45 20.38 12.2 19.7 12.08 19H5V5H16.17L19 7.83V12.08C19.7 12.2 20.38 12.45 21 12.81V7L17 3H5M6 6V10H15V6H6M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18C12 16.11 12.89 14.34 14.39 13.21C13.85 12.5 13 12 12 12M14 17V19H22V17H14Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ContentSaveMinusOutlineIcon",
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