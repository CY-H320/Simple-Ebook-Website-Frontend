<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon home-edit-outline-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M 21.0413,11.14C 21.1827,11.14 21.3173,11.1973 21.4213,11.3027L 22.6973,12.5787C 22.912,12.792 22.912,13.14 22.6973,13.3493L 21.6973,14.3493L 19.6507,12.3027L 20.6507,11.3027C 20.76,11.1973 20.9013,11.14 21.0413,11.14 Z M 19.0627,12.88L 21.1093,14.932L 15.0627,21L 13,21L 13,18.9373L 19.0627,12.88 Z M 12,5.688L 7,10.188L 7,18L 11,18L 11,20L 5,20L 5,12L 2,12L 12,3L 19.4587,9.71285L 17,12.1716L 17,10.188L 12,5.688 Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeEditOutlineIcon",
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