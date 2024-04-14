<script setup>
defineProps({
  show: Boolean
})
</script>

<template>
  <span class="mx-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="#3e61fd"
    >
      <path
        v-if="!show"
        d="M8 12a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L8 9.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 8 12z"
      ></path>
      <path
        v-if="show"
        d="M8 4a.997.997 0 0 0-.707.293l-5 5a.999.999 0 1 0 1.414 1.414L8 6.414l4.293 4.293a.999.999 0 1 0 1.414-1.414l-5-5A.997.997 0 0 0 8 4z"
      ></path>
    </svg>
  </span>
</template>
