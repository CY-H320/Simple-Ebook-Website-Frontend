<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon protocol-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M18 20H14L18 4H22M16 4H12L8 20H12M2 16.5A2.5 2.5 0 0 0 4.5 19A2.5 2.5 0 0 0 7 16.5A2.5 2.5 0 0 0 4.5 14A2.5 2.5 0 0 0 2 16.5M2 9.5A2.5 2.5 0 0 0 4.5 12A2.5 2.5 0 0 0 7 9.5A2.5 2.5 0 0 0 4.5 7A2.5 2.5 0 0 0 2 9.5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ProtocolIcon",
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