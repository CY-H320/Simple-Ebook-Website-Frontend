<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon clipboard-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H6.2L21 17.8V5M12 5C11.45 5 11 4.55 11 4S11.45 3 12 3 13 3.45 13 4 12.55 5 12 5M22.11 21.46L20.84 22.73L19.1 21C19.07 21 19.03 21 19 21H5C3.9 21 3 20.11 3 19V5C3 4.97 3 4.93 3 4.9L1.11 3L2.39 1.73L22.11 21.46Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ClipboardOffIcon",
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