<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon mailbox-up-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5,9H9V11H5V9M22,9V18A2,2 0 0,1 20,20H2V9A5,5 0 0,1 7,4H17A5,5 0 0,1 22,9M10,9A3,3 0 0,0 7,6A3,3 0 0,0 4,9V18H10V9M16,7H12V13H14V9H16V7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MailboxUpIcon",
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