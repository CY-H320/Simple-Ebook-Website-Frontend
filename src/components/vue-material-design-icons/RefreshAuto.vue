<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon refresh-auto-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12.68 6H11.32L7 16H9L9.73 14H14.27L15 16H17L12.68 6M10.3 12.5L12 8L13.7 12.5H10.3M17.4 20.4L19 22H14V17L16 19C18.39 17.61 20 14.95 20 12C20 7.59 16.41 4 12 4S4 7.59 4 12C4 14.95 5.61 17.53 8 18.92V21.16C4.47 19.61 2 16.1 2 12C2 6.5 6.5 2 12 2S22 6.5 22 12C22 15.53 20.17 18.62 17.4 20.4Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RefreshAutoIcon",
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