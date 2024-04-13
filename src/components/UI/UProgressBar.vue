<script setup>
import { computed } from 'vue'

const props = defineProps({
  creditSum: Number,
  totalSum: Number
})

const sumPercents = computed(() => (props.creditSum * 100) / props.totalSum)
</script>

<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="`width: ${sumPercents}%`"
      :aria-valuenow="sumPercents"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  height: 0.6em;
  background-color: var(--secondary-progress-color);
  .progress-bar {
    background-color: var(--primary-progress-color);
  }
}
</style>
