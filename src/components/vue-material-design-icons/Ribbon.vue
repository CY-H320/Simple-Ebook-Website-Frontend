<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon ribbon-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M13.41,19.31L16.59,22.5L18,21.07L14.83,17.9M15.54,11.53H15.53L12,15.07L8.47,11.53H8.46V11.53C7.56,10.63 7,9.38 7,8A5,5 0 0,1 12,3A5,5 0 0,1 17,8C17,9.38 16.44,10.63 15.54,11.53M16.9,13C18.2,11.73 19,9.96 19,8A7,7 0 0,0 12,1A7,7 0 0,0 5,8C5,9.96 5.81,11.73 7.1,13V13L10.59,16.5L6,21.07L7.41,22.5L16.9,13Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RibbonIcon",
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