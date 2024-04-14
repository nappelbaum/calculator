<script setup>
defineProps({
  color: String,
  name: String
})
</script>

<template>
  <button type="button" class="btn" :class="{ blue: color === 'blue' }">{{ name }}</button>
</template>

<style lang="scss" scoped>
button {
  width: 100%;
  color: #fff;
  padding: 0.5em 2em;

  &:focus {
    border-color: var(--input-border-color);
  }

  &:disabled {
    color: #fff !important;
    opacity: 1 !important;
  }
}
.blue {
  background-color: var(--secondary-progress-color);
}
</style>
