<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon sim-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20,4A2,2 0 0,0 18,2H10L4,8V20A2,2 0 0,0 6,22H18C19.11,22 20,21.1 20,20V4M9,19H7V17H9V19M17,19H15V17H17V19M9,15H7V11H9V15M13,19H11V15H13V19M13,13H11V11H13V13M17,15H15V11H17V15Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SimIcon",
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