<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon signature-image-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22,22H2V20H22V22M6.2,17.3L4.8,15.9L6.2,14.5L5.5,13.8L4.1,15.2L2.7,13.8L2,14.5L3.4,15.9L2,17.3L2.7,18L4.1,16.6L5.5,18L6.2,17.3M20,5H10A2,2 0 0,0 8,7V16A2,2 0 0,0 10,18H20A2,2 0 0,0 22,16V7A2,2 0 0,0 20,5M10,16L12.6,12.7L14.4,14.9L16.8,11.6L20,16H10Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SignatureImageIcon",
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