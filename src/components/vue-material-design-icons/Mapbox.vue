<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon mapbox-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M16.75,14.45C18.65,12.55 18.58,9.39 16.59,7.41C14.6,5.43 11.45,5.35 9.55,7.25C6.12,10.68 7.22,16.78 7.22,16.78C7.22,16.78 13.33,17.87 16.75,14.45M13.15,7.86L14.13,9.87L16.14,10.85L14.13,11.83L13.15,13.84L12.17,11.83L10.16,10.85L12.17,9.87L13.15,7.86Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MapboxIcon",
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