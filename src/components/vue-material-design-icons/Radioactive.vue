<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon radioactive-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M14 11C14 12.1 13.1 13 12 13S10 12.1 10 11 10.9 9 12 9 14 9.9 14 11M16 11H22C22 7.3 20 4.1 17 2.3L14 7.5C15.2 8.2 16 9.5 16 11M12 15C11.3 15 10.6 14.8 10 14.4C8.8 16.5 7.4 18.8 7 19.6C8.5 20.5 10.2 20.9 12 20.9S15.5 20.4 17 19.6L14 14.4C13.4 14.8 12.7 15 12 15M10 7.6C8.8 5.5 7.4 3.1 7 2.3C4 4 2 7.3 2 11H8C8 9.5 8.8 8.2 10 7.6Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RadioactiveIcon",
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