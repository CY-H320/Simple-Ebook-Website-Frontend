<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon nature-people-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4.5,11A1.5,1.5 0 0,0 6,9.5A1.5,1.5 0 0,0 4.5,8A1.5,1.5 0 0,0 3,9.5A1.5,1.5 0 0,0 4.5,11M22.17,9.17C22.17,5.3 19.04,2.17 15.17,2.17A7,7 0 0,0 8.17,9.17C8.17,12.64 10.69,15.5 14,16.06V20H6V17H7V13A1,1 0 0,0 6,12H3A1,1 0 0,0 2,13V17H3V22H19V20H16V16.12C19.47,15.71 22.17,12.76 22.17,9.17Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NaturePeopleIcon",
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