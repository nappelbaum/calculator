<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import toString from '@/services/toString'

const store = useStore()

const result = computed(() => store.getters['params/result'])
</script>

<template>
  <table class="w-100">
    <tr class="border-bottom border-secondary">
      <td>
        <div class="text-secondary">Дата</div>
      </td>
      <td>
        <div class="text-secondary">Остаток, ₽</div>
      </td>
      <td>
        <div class="text-secondary">Проценты, ₽</div>
      </td>
      <td>
        <div class="text-secondary">Погашено, ₽</div>
      </td>
      <td>
        <div class="text-secondary">Платеж, ₽</div>
      </td>
    </tr>

    <tr
      v-for="({ date, restSum, percent, paid }, i) in result.schedule"
      :key="date"
      class="border-bottom border-body-tertiary"
    >
      <td>
        <div class="text-secondary-emphasis">{{ date }}</div>
        <div class="pay-number text-secondary">{{ i + 1 }} платеж</div>
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
        <div class="text-secondary-emphasis">{{ toString(result.annMonts) }}</div>
      </td>
    </tr>
  </table>
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
