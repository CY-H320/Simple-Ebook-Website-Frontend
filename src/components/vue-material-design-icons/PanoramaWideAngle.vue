<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon panorama-wide-angle-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 4C8 4 5.2 4.6 3 5C2.5 7 2 8.9 2 12C2 15 2.5 17 3 19C5.2 19.4 8 20 12 20C16 20 18.9 19.4 21 19C21.6 17 22 15 22 12C22 9 21.5 6.9 21 5C18.9 4.6 16 4 12 4Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PanoramaWideAngleIcon",
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