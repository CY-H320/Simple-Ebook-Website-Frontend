<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon terraform-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 5.4V11.8L15.4 15V8.7L21 5.4M14.8 8.7V15L9.2 11.8V5.4L14.8 8.7M14.8 15.7V22.1L9.2 18.9V12.5L14.8 15.7M8.6 5.1V11.5L3 8.3V1.9L8.6 5.1Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TerraformIcon",
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