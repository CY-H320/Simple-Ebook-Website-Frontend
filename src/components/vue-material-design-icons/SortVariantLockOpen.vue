<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon sort-variant-lock-open-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V13.5C16.2 12.1 17.6 11 19 11S21.8 12.1 21.8 13.5V14H20.5V13.5C20.5 12.7 19.8 12.2 19 12.2S17.5 12.7 17.5 13.5V16H21.8C22.4 16 23 16.6 23 17.3M3 13V11H15V13H3M3 6H21V8H3V6M3 18V16H9V18H3">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SortVariantLockOpenIcon",
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