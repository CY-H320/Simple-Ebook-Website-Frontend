<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon mailbox-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M17,4H7A5,5 0 0,0 2,9V20H20A2,2 0 0,0 22,18V9A5,5 0 0,0 17,4M10,18H4V9A3,3 0 0,1 7,6A3,3 0 0,1 10,9V18M19,15H17V13H13V11H19V15M9,11H5V9H9V11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MailboxIcon",
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