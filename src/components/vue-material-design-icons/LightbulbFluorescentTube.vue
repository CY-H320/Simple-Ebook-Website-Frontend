<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon lightbulb-fluorescent-tube-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M7.05 2.81L6.5 3.34L5.11 1.92L3.87 3.16L5.28 4.58L4.58 5.28L3.16 3.87L1.92 5.11L3.34 6.5L2.81 7.05L16.95 21.19L17.5 20.66L18.89 22.08L20.13 20.84L18.72 19.43L19.42 18.72L20.84 20.13L22.08 18.9L20.66 17.5L21.19 16.95L7.05 2.81Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LightbulbFluorescentTubeIcon",
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