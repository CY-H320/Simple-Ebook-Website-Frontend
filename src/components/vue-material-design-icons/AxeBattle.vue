<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon axe-battle-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21.47 12.43C19.35 14.55 15.82 13.84 15.82 13.84V9.6L3.41 22L2 20.59L14.4 8.18H10.16C10.16 8.18 9.45 4.65 11.57 2.53C13.69 .406 17.23 1.11 17.23 1.11V5.36L17.94 4.65L19.35 6.06L18.64 6.77H22.89C22.89 6.77 23.59 10.31 21.47 12.43Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AxeBattleIcon",
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