<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon credit-card-plus-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H13.09A5.47 5.47 0 0 1 13 19A6 6 0 0 1 19 13A5.88 5.88 0 0 1 22 13.81V6A2 2 0 0 0 20 4M20 11H4V8H20M20 15V18H23V20H20V23H18V20H15V18H18V15Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CreditCardPlusIcon",
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