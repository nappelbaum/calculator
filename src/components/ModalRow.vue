<script setup>
import toString from '@/services/toString'

defineProps({
  result: Array
})
</script>

<template>
  <tr
    v-for="{ date, id, restSum, percent, paid, annMonts } in result"
    :key="id"
    class="border-bottom border-body-tertiary"
  >
    <td>
      <div class="text-secondary-emphasis">{{ date }}</div>
      <div class="pay-number text-secondary">{{ id }} платеж</div>
    </td>
    <td>
      <div class="text-secondary-emphasis">{{ toString(restSum) }}</div>
    </td>
    <td>
      <div class="text-secondary-emphasis">{{ toString(percent) }}</div>
    </td>
    <td>
      <div class="text-secondary-emphasis">{{ toString(paid) }}</div>
    </td>
    <td>
      <div class="text-secondary-emphasis">{{ toString(annMonts) }}</div>
    </td>
  </tr>
</template>

<style lang="scss" scoped>
td {
  vertical-align: middle;
  text-align: left;
  padding: 24px 6px;
  white-space: nowrap;
}

.pay-number {
  font-size: 0.8rem;
}
</style>
