<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon hoop-house-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 5C6.5 5 2 9.5 2 15V21H22V15C22 9.5 17.5 5 12 5M12 7C14.53 7 16.78 8.17 18.25 10H5.76C7.22 8.17 9.47 7 12 7M8 19H4V15C4 13.94 4.21 12.93 4.58 12H8V19M14 19H10V12H14V19M20 19H16V12H19.42C19.79 12.93 20 13.94 20 15V19Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HoopHouseIcon",
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