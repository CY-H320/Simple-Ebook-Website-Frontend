<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon power-socket-au-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4.22,2A2.22,2.22 0 0,0 2,4.22V19.78C2,21 3,22 4.22,22H19.78A2.22,2.22 0 0,0 22,19.78V4.22C22,3 21,2 19.78,2H4.22M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M8.27,7.54L6.27,11L8,12L10,8.54L8.27,7.54M15.73,7.54L14,8.54L16,12L17.73,11L15.73,7.54M11,14V18H13V14H11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PowerSocketAuIcon",
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