<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon relation-many-to-zero-or-one-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 15V13H19V15H18.79A2.5 2.5 0 0 0 14.21 15H13V7H5L3 5H2V11H3L5 9H11V17H14.21A2.5 2.5 0 0 0 18.79 17H19V19H21V17H22V15M16.5 17A1 1 0 1 1 17.5 16A1 1 0 0 1 16.5 17Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RelationManyToZeroOrOneIcon",
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