<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon alphabetical-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M22.11 21.46L16 15.31L14 13.31L13.65 13L10 9.34L2.39 1.73L1.11 3L10 11.89V15A2 2 0 0 0 12 17H14A1.92 1.92 0 0 0 14.89 16.78L20.84 22.73M12 15V13.89L13.11 15M16 12.78L14.22 11A2 2 0 0 1 16 12.78M20.2 17L18 14.8V13A2 2 0 0 1 20 11H22V13H20V15H22V17M6 11H4A2 2 0 0 0 2 13V15A2 2 0 0 0 4 17H8V13A2 2 0 0 0 6 11M6 15H4V13H6M12 8.8L10.2 7H12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphabeticalOffIcon",
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