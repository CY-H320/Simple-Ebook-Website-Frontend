<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon bag-carry-on-off-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2.1 4.9L6 8.9V19C6 19.5 6.2 20 6.6 20.4C7 20.8 7.5 21 8 21V10.8L9 11.8V21H13.2C13.1 20.6 13 20.2 13 20C13 18.8 13.5 18 14.6 17.4L15.4 18.2C14.5 18.5 14.1 19.2 14.1 20.1C14.1 20.6 14.3 21.1 14.7 21.5C15 21.8 15.5 22 16 22C16.9 22 17.6 21.6 17.9 20.7L19.1 21.9L20.5 20.5L3.5 3.5L2.1 4.9M12 2C12 2.5 12.2 3 12.6 3.4S13.5 4 14 4V7H9.8L16 13.2V2H12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BagCarryOnOffIcon",
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