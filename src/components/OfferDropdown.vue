<script setup>
import getNoun from '@/services/getNoun'

defineProps({
  offerLength: Number,
  show: Boolean
})
</script>

<template>
  <div class="d-flex align-items-center">
    <span class="text-primary fs-6 fw-bold"
      >Еще {{ offerLength - 1 }}
      {{ getNoun(offerLength - 1, ['кредит', 'кредита', 'кредитов']) }}</span
    >
    <u-arrow-btn :show="show" />
  </div>
</template>
