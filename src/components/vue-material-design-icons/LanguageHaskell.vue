<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : true"
        :aria-label="title"
        class="material-design-icon language-haskell-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2.08,19L6.75,12L2.08,5H5.58L10.25,12L5.58,19H2.08M6.75,19L11.42,12L6.75,5H10.25L19.59,19H16.09L13.17,14.63L10.25,19H6.75M18.03,14.92L16.5,12.58H21.92V14.92H18.03M15.7,11.42L14.14,9.08H21.92V11.42H15.7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LanguageHaskellIcon",
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