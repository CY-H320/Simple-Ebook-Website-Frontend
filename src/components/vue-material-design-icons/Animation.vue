<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon animation-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AnimationIcon",
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