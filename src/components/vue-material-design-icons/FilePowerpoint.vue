<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon file-powerpoint-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12.6,12.3H10.6V15.5H12.7C13.3,15.5 13.6,15.3 13.9,15C14.2,14.7 14.3,14.4 14.3,13.9C14.3,13.4 14.2,13.1 13.9,12.8C13.6,12.5 13.2,12.3 12.6,12.3M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.2,16C14.6,16.5 14.1,16.7 12.8,16.7H10.6V20H9V11H12.8C14.1,11 14.7,11.3 15.2,11.8C15.8,12.4 16,13 16,13.9C16,14.8 15.8,15.5 15.2,16M13,9V3.5L18.5,9H13Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FilePowerpointIcon",
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