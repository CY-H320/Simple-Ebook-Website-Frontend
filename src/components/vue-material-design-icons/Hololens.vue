<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon hololens-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12,8C12,8 22,8 22,11C22,11 22.09,14.36 21.75,14.25C21,11 12,11 12,11C12,11 3,11 2.25,14.25C1.91,14.36 2,11 2,11C2,8 12,8 12,8M12,12C20,12 20.75,14.25 20.75,14.25C19.75,17.25 19,18 15,18C12,18 13,16.5 12,16.5C11,16.5 12,18 9,18C5,18 4.25,17.25 3.25,14.25C3.25,14.25 4,12 12,12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HololensIcon",
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