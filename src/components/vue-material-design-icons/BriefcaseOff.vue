<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon briefcase-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22.11 21.46L20.84 22.73L19.11 21H4C2.89 21 2 20.1 2 19V8C2 6.89 2.89 6 4 6H4.11L1.11 3L2.39 1.73L22.11 21.46M22 18.8L8 4.8V4C8 2.89 8.89 2 10 2H14C15.11 2 16 2.9 16 4V6H20C21.11 6 22 6.9 22 8V18.8M14 4H10V6H14V4Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BriefcaseOffIcon",
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