<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon bio-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M17,12H20A2,2 0 0,1 22,14V17A2,2 0 0,1 20,19H17A2,2 0 0,1 15,17V14A2,2 0 0,1 17,12M17,14V17H20V14H17M2,7H7A2,2 0 0,1 9,9V11A2,2 0 0,1 7,13A2,2 0 0,1 9,15V17A2,2 0 0,1 7,19H2V13L2,7M4,9V12H7V9H4M4,17H7V14H4V17M11,13H13V19H11V13M11,9H13V11H11V9Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BioIcon",
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