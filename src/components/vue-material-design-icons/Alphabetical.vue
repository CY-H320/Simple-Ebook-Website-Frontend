<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon alphabetical-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6,11A2,2 0 0,1 8,13V17H4A2,2 0 0,1 2,15V13A2,2 0 0,1 4,11H6M4,13V15H6V13H4M20,13V15H22V17H20A2,2 0 0,1 18,15V13A2,2 0 0,1 20,11H22V13H20M12,7V11H14A2,2 0 0,1 16,13V15A2,2 0 0,1 14,17H12A2,2 0 0,1 10,15V7H12M12,15H14V13H12V15Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphabeticalIcon",
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