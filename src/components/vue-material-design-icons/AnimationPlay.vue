<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon animation-play-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4,2H14V4H4V14H2V4C2,2.89 2.89,2 4,2M8,6H18V8H8V18H6V8C6,6.89 6.89,6 8,6M12,10H20C21.11,10 22,10.89 22,12V20C22,21.11 21.11,22 20,22H12C10.89,22 10,21.11 10,20V12C10,10.89 10.89,10 12,10M14,12V20L20,16L14,12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AnimationPlayIcon",
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