<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon lightbulb-spot-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20.84 22.73L15.11 17H9L9 14C6.5 12.57 4 11 4 6V5.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M22 4V2H5.2L7.2 4H22M20 6H9.2L16.37 13.17C18.33 11.87 20 10.07 20 6M13 22H15V19H13V22M9 22H11V19H9L9 22Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LightbulbSpotOffIcon",
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