<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon synagogue-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6 8V21H10V16C10 14.9 10.9 14 12 14S14 14.9 14 16V21H18V8L12 3L6 8M13.5 10C13.5 10.8 12.8 11.5 12 11.5S10.5 10.8 10.5 10 11.2 8.5 12 8.5 13.5 9.2 13.5 10M3 5C1.9 5 1 5.9 1 7V8H5V7C5 5.9 4.1 5 3 5M1 9H5V21H1V9M21 5C19.9 5 19 5.9 19 7V8H23V7C23 5.9 22.1 5 21 5M19 9H23V21H19V9Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SynagogueIcon",
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