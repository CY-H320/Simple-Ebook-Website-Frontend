<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon fridge-industrial-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 15.8L5.7 2.5C6.05 2.19 6.5 2 7 2H17C18.11 2 19 2.9 19 4V15.8M22.11 21.46L20.84 22.73L18.46 20.35C18.1 20.75 17.58 21 17 21V22H15V21H9V22H7V21C5.9 21 5 20.11 5 19V6.89L1.11 3L2.39 1.73L22.11 21.46M10 11.89L8.11 10H8V15H10V11.89Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FridgeIndustrialOffIcon",
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