<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon bank-remove-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M14.46,15.88L15.88,14.46L18,16.59L20.12,14.46L21.54,15.88L19.41,18L21.54,20.12L20.12,21.54L18,19.41L15.88,21.54L14.46,20.12L16.59,18L14.46,15.88M11.5,1L21,6V8H2V6L11.5,1M16,10H19V12.08L18,12C17.3,12 16.63,12.12 16,12.34V10M2,22V19H12.08C12.27,20.14 12.79,21.17 13.53,22H2M10,10H13V14.68C12.54,15.37 12.22,16.15 12.08,17H10V10M4,10H7V17H4V10Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BankRemoveIcon",
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