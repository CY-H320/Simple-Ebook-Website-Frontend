<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon guitar-acoustic-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19.59,3H22V5H20.41L16.17,9.24C15.8,8.68 15.32,8.2 14.76,7.83L19.59,3M12,8A4,4 0 0,1 16,12C16,13.82 14.77,15.42 13,15.87V16A5,5 0 0,1 8,21A5,5 0 0,1 3,16A5,5 0 0,1 8,11H8.13C8.58,9.24 10.17,8 12,8M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5M6.94,14.24L6.23,14.94L9.06,17.77L9.77,17.06L6.94,14.24Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GuitarAcousticIcon",
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