<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon offer-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 13C21.6 13 22.1 13.2 22.4 13.6C22.8 14 23 14.5 23 15L15 18L8 16V7H9.9L17.2 9.7C17.7 9.9 18 10.3 18 10.8C18 11.1 17.9 11.4 17.7 11.6C17.5 11.8 17.2 12 16.8 12H14L12.3 11.3L12 12.2L14 13H21M2 7H6V18H2V7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "OfferIcon",
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